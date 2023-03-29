import { useEffect, useState } from "react";

import MainTable from "../../components/Table";
import TableSettingModal from "./TableSettingModal";
import Navbar from "../../layouts/Navbar/Navbar";
import TableHeader from "../../components/TableToolbar";

// get data
import { getData } from "../../api/data_HOSE";
import { getData_HNX } from "../../api/data_HNX";
import { getData_HNX30 } from "../../api/data_HNX30";
import Footer from "../../layouts/Footer/Footer";
import OrderModal from "./OrderModal";

const defaultColumns = [
  "symbol",
  "reference",
  "ceiling",
  "floor",
  "buy",
  "close",
  "sale",
  "totalVol",
  "price",
  "surplus",
  "international",
];

const Home = () => {
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);
  const [stockIds, setStockIds] = useState([]);
  const [changedData, setChangedData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalTye] = useState("table-setting");
  const [columns_HOSE, setColumns_HOSE] = useState(defaultColumns);
  const [columns_HNX, setColumns_HNX] = useState(defaultColumns);
  const [columns_HNX30, setColumns_HNX30] = useState(defaultColumns);
  const [columns_VN30, setColumns_VN30] = useState(defaultColumns);
  const [selectedMarket, setSelectedMarket] = useState("hose");

  useEffect(() => {
    let response = [];
    if (selectedMarket === "hose") {
      response = getData();
    }
    if (selectedMarket === "hnx") {
      response = getData_HNX();
    }
    if (selectedMarket === "hnx30") {
      response = getData_HNX30();
    }
    setInitData(response);
    setData(response);
  }, [selectedMarket]);

  //* get stock id array
  useEffect(() => {
    const newArray = data?.map((i) => {
      return i.StockId;
    });
    setStockIds(newArray);
  }, [data]);

  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  //*  get random 6 code every 1 second
  useEffect(() => {
    const random = setInterval(() => {
      const randomArray = getMultipleRandom(stockIds, 6);
      setChangedData(randomArray);
    }, 6000);

    return () => {
      clearInterval(random);
    };
  }, [stockIds]);
  // console.log(blink);
  const roundMath = (max, min) => {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  //* only change row match with random stockIds
  useEffect(() => {
    const array = data.map((i) => {
      const isMatched = changedData.includes(i.StockId);
      const randomChangeCell = Math.random() < 0.25;

      if (isMatched) {
        return {
          ...i,
          closePrice:
            Math.round(Math.random() * (i.ceiling - i.floor + 1)) + i.floor,
          offerPrice3: randomChangeCell
            ? roundMath(i.offerPrice2, i.reference)
            : i.offerPrice3,
          offerPrice2: randomChangeCell
            ? roundMath(i.offerPrice1, i.offerPrice3)
            : i.offerPrice2,
        };
      } else {
        return i;
      }
    });
    if (changedData.length > 0) {
      setData(array);
    }
  }, [changedData]);

  const selectedMarketColumns = () => {
    if (selectedMarket === "hose") {
      return columns_HOSE;
    }
    if (selectedMarket === "vn30") {
      return columns_VN30;
    }
    if (selectedMarket === "hnx") {
      return columns_HNX;
    }
    if (selectedMarket === "hnx30") {
      return columns_HNX30;
    }
  };

  const columns = {
    hose: columns_HOSE,
    vn30: columns_VN30,
    hnx: columns_HNX,
    hnx30: columns_HNX30,
  };

  const handleCloseModal = (modalResult) => {
    setModalOpen(false);
    if (!!modalResult) {
      setColumns_HNX(modalResult.hnx);
      setColumns_HOSE(modalResult.hose);
      setColumns_HNX30(modalResult.hnx30);
      setColumns_VN30(modalResult.vn30);
    }
  };

  // useEffect(() => {
  //   console.log("im running");
  // }, [columns_HNX, columns_HOSE, modalOpen]);

  return (
    <div style={{ background: "#232323" }}>
      <Navbar />
      <TableHeader
        action={() => {
          setModalOpen(true);
          setModalTye("table-setting");
        }}
        setSelectedMarket={setSelectedMarket}
        selectedMarket={selectedMarket}
      />
      <MainTable
        sx={{ mt: "38px", pb: "30px" }}
        data={data}
        initData={initData}
        columns={selectedMarketColumns()}
        setSelectedMarket={setSelectedMarket}
        selectedMarket={selectedMarket}
      />
      {modalOpen && modalType === "table-setting" && (
        <TableSettingModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          columns={columns}
        />
      )}
      {modalOpen && modalType === "order" && (
        <OrderModal isOpen={modalOpen} onClose={handleCloseModal} />
      )}
      <Footer
        action={() => {
          setModalOpen(true);
          setModalTye("order");
        }}
      />
    </div>
  );
};

export default Home;

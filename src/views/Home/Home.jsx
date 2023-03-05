import { useEffect, useState } from "react";

import { getData } from "../../data_HOSE";
import MainTable from "../../components/Table";
import TableSettingModal from "./TableSettingModal";
import { getData_HNX } from "../../data_HNX";
import Navbar from "../../layouts/Navbar/Navbar";

const defaultColumns = [
  "symbol",
  "reference",
  "ceiling",
  "floor",
  "buy",
  "close",
  "sale",
  "totalVol",
];

const Home = () => {
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);
  const [stockIds, setStockIds] = useState([]);
  const [changedData, setChangedData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalTye] = useState("table-setting");
  // const [changeIndex, setChangeIndex] = useState([]);
  const [columns_HOSE, setColumns_HOSE] = useState(defaultColumns);
  const [columns_HNX, setColumns_HNX] = useState(defaultColumns);
  const [selectedMarket, setSelectedMarket] = useState("hose");

  useEffect(() => {
    let response = [];
    if (selectedMarket === "hose") {
      response = getData();
    } else {
      response = getData_HNX();
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
    }, 3000);

    return () => {
      clearInterval(random);
    };
  }, [stockIds]);
  // console.log(blink);
  const roundMath = (max, min) => {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };

  // //* only change row match with random stockIds
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

  const columns = () => {
    if (selectedMarket === "hose") {
      return columns_HOSE;
    } else {
      return columns_HNX;
    }
  };

  const setColumns = () => {
    if (selectedMarket === "hose") {
      return setColumns_HOSE;
    } else {
      return setColumns_HNX;
    }
  };

  return (
    <div style={{ background: "#232323" }}>
      <Navbar />
      <MainTable
        sx={{ mt: "40px" }}
        data={data}
        initData={initData}
        columns={columns()}
        action={() => {
          setModalOpen(true);
        }}
        setSelectedMarket={setSelectedMarket}
        selectedMarket={selectedMarket}
      />
      {modalOpen && modalType === "table-setting" && (
        <TableSettingModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          columns={columns()}
          setColumns={setColumns()}
        />
      )}
    </div>
  );
};

export default Home;

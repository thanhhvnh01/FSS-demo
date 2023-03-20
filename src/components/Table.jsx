import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import TableRow from "./TableRow";
import TableHeader from "./TableToolbar";
import { FormattedMessage } from "react-intl";

const table_Head1 = [
  { label: "symbol", rowSpan: 2 },
  { label: "reference", rowSpan: 2 },
  { label: "ceiling", rowSpan: 2 },
  { label: "floor", rowSpan: 2 },
  { label: "buy", rowSpan: 1, colSpan: 6 },
  { label: "close", rowSpan: 1, colSpan: 3 },
  { label: "sale", rowSpan: 1, colSpan: 6 },
  { label: "totalVol", rowSpan: 2 },
  { label: "price", rowSpan: 1, colSpan: 3 },
  { label: "surplus", rowSpan: 1, colSpan: 2 },
  { label: "international", rowSpan: 1, colSpan: 2 },
];

const table_Head2 = [
  { label: "bidPrice3" },
  { label: "bidVol3" },
  { label: "bidPrice2" },
  { label: "bidVol2" },
  { label: "bidPrice1" },
  { label: "bidVol1" },
  { label: "closePrice" },
  { label: "closeVol" },
  { label: "change" },
  { label: "offerPrice1" },
  { label: "offerVol1" },
  { label: "offerPrice2" },
  { label: "offerVol2" },
  { label: "offerPrice3" },
  { label: "offerVol3" },
  { label: "offerVol2" },
  { label: "offerPrice3" },
  { label: "offerVol3" },
  { label: "offerVol2" },
  { label: "offerPrice3" },
  { label: "offerVol3" },
  { label: "offerVol3" },
];
const MainTable = ({
  data,
  initData,
  action,
  columns,
  setSelectedMarket,
  selectedMarket,
  ...props
}) => {
  return (
    <TableContainer {...props}>
      <div className="table-fixed-head">
        <Table
          variant="simple"
          size="sm"
          background="black"
          sx={{
            width: "100%",
            marginTop: 9,
            tableLayout: "fixed",
            position: "fixed",
            zIndex: 0,
          }}
        >
          <thead
            style={{
              width: "100%",
            }}
          >
            <tr>
              {table_Head1.map((t, index) => {
                if (columns.includes(t.label))
                  return (
                    <th
                      key={index}
                      rowSpan={t.rowSpan}
                      colSpan={t?.colSpan}
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      <FormattedMessage id={`label.${t.label}`} />
                    </th>
                  );
              })}
            </tr>
            <tr>
              {table_Head2.map((t, index) => {
                return (
                  <th
                    rowSpan={1}
                    key={index}
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <FormattedMessage id={`label.${t.label}`} />
                  </th>
                );
              })}
            </tr>
          </thead>
        </Table>
        <Table sx={{ tableLayout: "fixed" }}>
          <Tbody
            sx={{
              marginTop: "79px",
              width: "100%",
              borderTop: "110px solid transparent",
            }}
          >
            {data.map((item, index) => {
              const refValue = initData.filter((i) => {
                return i.StockId === item.StockId;
              });
              return (
                <TableRow
                  key={index}
                  refValue={refValue[0]}
                  value={item}
                  columns={columns}
                />
              );
            })}
          </Tbody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default MainTable;

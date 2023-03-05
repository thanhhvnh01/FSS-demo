import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
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
      <TableHeader
        action={action}
        setSelectedMarket={setSelectedMarket}
        selectedMarket={selectedMarket}
      />
      <div className="table-fixed-head">
        <Table
          variant="simple"
          size="sm"
          background="black"
          sx={{ tableLayout: "fixed" }}
        >
          <Thead
            background="black"
            sx={{ position: "fixed", top: "68px", width: "100%" }}
          >
            <Tr>
              {table_Head1.map((t, index) => {
                if (columns.includes(t.label))
                  return (
                    <Th
                      key={index}
                      rowSpan={t.rowSpan}
                      colSpan={t?.colSpan}
                      sx={{ textAlign: "center", width: "73.38px" }}
                    >
                      <FormattedMessage id={`label.${t.label}`} />
                    </Th>
                  );
              })}
            </Tr>
            <Tr>
              {table_Head2.map((t, index) => {
                return (
                  <Th
                    rowSpan={1}
                    key={index}
                    sx={{ textAlign: "center", width: "73.38px" }}
                  >
                    <FormattedMessage id={`label.${t.label}`} />
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody sx={{ paddingTop: "79px", display: "block" }}>
            {data.map((item) => {
              const refValue = initData.filter((i) => {
                return i.StockId === item.StockId;
              });
              return (
                <TableRow
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

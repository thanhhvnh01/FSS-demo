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

const MainTable = ({ data, initData, action, columns }) => {
  return (
    <TableContainer>
      <TableHeader action={action} />
      <Table
        variant="simple"
        size="sm"
        background="black"
        sx={{ tableLayout: "fixed" }}
      >
        <Thead background="black">
          <Tr>
            {table_Head1.map((t) => {
              if (columns.includes(t.label))
                return (
                  <Th
                    rowSpan={t.rowSpan}
                    colSpan={t?.colSpan}
                    sx={{ textAlign: "center" }}
                  >
                    <FormattedMessage id={`label.${t.label}`} />
                  </Th>
                );
            })}
          </Tr>
          <Tr>
            <Th rowSpan={1}>Giá 3</Th>
            <Th rowSpan={1}>KL 3</Th>
            <Th rowSpan={1}>Giá 2</Th>
            <Th rowSpan={1}>KL 2</Th>
            <Th rowSpan={1}>Giá 1</Th>
            <Th rowSpan={1}>KL 1</Th>
            <Th rowSpan={1}>Giá</Th>
            <Th rowSpan={1}>KL</Th>
            <Th rowSpan={1}>+/-</Th>
            <Th rowSpan={1}>Giá 1</Th>
            <Th rowSpan={1}>KL 1</Th>
            <Th rowSpan={1}>Giá 2</Th>
            <Th rowSpan={1}>KL 2</Th>
            <Th rowSpan={1}>Giá 3</Th>
            <Th rowSpan={1}>KL 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => {
            const refValue = initData.filter((i) => {
              return i.StockId === item.StockId;
            });
            return (
              <TableRow refValue={refValue[0]} value={item} columns={columns} />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;

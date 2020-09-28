import React, { Fragment } from "react";
// import moment from "moment";
import TableRow from "./TableRow";
const TableBody = ({ bookings }) => {
  return (
    <tbody>
      {bookings.map(booking => (
        <TableRow key={booking.id} booking={booking} />
      ))}
    </tbody>
  );
};

export default TableBody;

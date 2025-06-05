import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
const ManageEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allevents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  // delete an events
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Event is deleted successfully");
        setAllEvents(data);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">ManageEvents</h2>

      {/* table for event data */}
      <Table className="lg:w-[1180px]">
        <TableBody className="text-xl divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="text-2xl font-bold text-black whitespace-nowrap dark:text-white">
              No.
            </TableCell>
            <TableCell className="text-2xl font-bold text-black whitespace-nowrap dark:text-white">
              Event Name
            </TableCell>
            <TableCell className="text-2xl font-bold text-black whitespace-nowrap dark:text-white">
              Date of Event
            </TableCell>
            <TableCell className="text-2xl font-bold text-black whitespace-nowrap dark:text-white">
              Description About that Event
            </TableCell>

            <TableCell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit or ManageEvents
              </a>
            </TableCell>
          </TableRow>
          {allEvents.map((events, index) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={events._id}
            >
              <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {events.name}
              </TableCell>
              <TableCell> {events.date} </TableCell>
              <TableCell> {events.description} </TableCell>

              <TableCell>
                <Link
                  to={`/admin/dashboard/edit-events/${events._id}`}
                  className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => handleDelete(events._id)}
                  className="px-4 py-1 font-semibold text-white bg-red-600 rounded-sm hover:bg-sky-600"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageEvents;

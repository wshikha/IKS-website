import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditEvents = () => {
  const { id } = useParams();
  const { name, date, image_url, pdf_url, description } = useLoaderData();

  //handle event submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const image_url = form.image_url.value;
    const description = form.description.value;
    const pdf_url = form.pdf_url.value;

    const updateEventObj = {
      name,
      date,
      image_url,
      description,
      pdf_url,
    };

    //console.log(eventObj);

    fetch(`http://localhost:5000/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEventObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Event is Updated Successfully!!!");
      });
  };
  return (
    <div className="px-24 my-12">
      <h2 className="mt-10 mb-8 text-3xl font-bold p-14">
        {" "}
        Update the Event Data
      </h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 px-14"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="name">Name of Event</Label>
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="name of event"
              required
              defaultValue={name}
            />
          </div>
          {/*date*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="name">Date of Event</Label>
            </div>
            <TextInput
              id="date"
              type="date"
              placeholder="date of event"
              required
              defaultValue={date}
            />
          </div>
        </div>
        {/*second row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="name">Image of Event</Label>
            </div>
            <TextInput
              id="image_url"
              type="text"
              placeholder="Event image URL"
              required
              defaultValue={image_url}
            />
          </div>
          {/*date*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="name">PDF of Event</Label>
            </div>
            <TextInput
              id="pdf_url"
              type="text"
              placeholder="pdf url of Event"
              required
              defaultValue={pdf_url}
            />
          </div>
        </div>
        {/*description*/}
        <div>
          <div className="block w-full mb-2">
            <Label htmlFor="description"> Description About the Event</Label>
          </div>
          <Textarea
            id="description"
            type="text"
            placeholder="Write your event description..."
            required
            className="w-full"
            rows={9}
            defaultValue={description}
          />
        </div>

        <Button type="submit" className="mt-5 bg-blue-900 text-zinc-50">
          Upload Event
        </Button>
      </form>
    </div>
  );
};

export default EditEvents;

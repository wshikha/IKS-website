import React from "react";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  FileInput,
  HelperText,
} from "flowbite-react";

function UploadEvents() {
  const typesofevents = [
    "Seminar",
    "Symposium",
    "Conference",
    "Workshop",
    "Competition/quiz",
  ];

  const [selectedType, setSelectedType] = useState(typesofevents[0]);
  //handle event submission
  const handleEventSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const image_url = form.image_url.value;
    const description = form.description.value;
    const pdf_url = form.pdf_url.value;
    const eventType = form.typesofevents.value;
    const duration = form.duration.value;
    const venue = form.venue.value;
    const speaker_name = form.speaker_name.value;
    const speaker_description = form.speaker_descriptions.value;

    const eventObj = {
      name,
      date,
      image_url,
      description,
      pdf_url,
      typesofevents: eventType,
      duration,
      venue,
      speaker_name,
      speaker_description,
    };

    console.log(eventObj);
    //send data to data base
    fetch("http://localhost:5000/iksevents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Event uploaded successfully !!!");
        form.reset();
      });
  };
  return (
    <div className="px-24 my-12">
      <h2 className="mt-10 mb-8 text-3xl font-bold p-14"> Upload Events</h2>

      <form
        onSubmit={handleEventSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 px-14"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="name">Name of Event</Label>
            </div>
            <TextInput
              id="event_name"
              name="name"
              type="text"
              placeholder="name of event"
              required
            />
          </div>
          {/*date*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="date">Date of Event</Label>
            </div>
            <TextInput
              id="date"
              type="date"
              name="date"
              placeholder="date of event"
              required
            />
          </div>
        </div>
        {/*second row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="venue">Venue of Event</Label>
            </div>
            <TextInput
              id="venue"
              name="venue"
              type="text"
              placeholder="venue of event"
              required
            />
          </div>
          {/*date*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="time">Duration of event</Label>
            </div>
            <TextInput
              id="time"
              name="duration"
              type="time"
              placeholder="duration of event"
              required
            />
          </div>
        </div>

        {/*third row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="speaker_name">Name of speaker</Label>
            </div>
            <TextInput
              id="speaker_name"
              name="speaker_name"
              type="text"
              placeholder="name of speaker"
              required
            />

            <div>
              <div className="block mb-2">
                <Label htmlFor="description">
                  {" "}
                  Description About the Speaker
                </Label>
              </div>
              <Textarea
                id="speaker_description"
                name="speaker_description"
                placeholder="Write about speaker..."
                required
                className="w-full"
                rows={4}
              />
            </div>
          </div>
          {/*typpes of events*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="event_type">Types of events</Label>
            </div>

            <select
              id="event_type"
              name="typesofevents"
              className="w-full rounded"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {typesofevents.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*fourth row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="file-upload-helper-text">Image of Event</Label>
            </div>
            <TextInput
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Event image URL"
              required
            />
          </div>
          {/*date*/}
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="pdf_url">PDF of Event</Label>
            </div>
            <TextInput
              id="pdf_url"
              name="pdf_url"
              type="text"
              placeholder="pdf url of Event"
              required
            />
          </div>
        </div>

        {/*description*/}
        <div>
          <div className="block mb-2">
            <Label htmlFor="description"> Description About the Event</Label>
          </div>
          <Textarea
            id="event_description"
            name="description"
            placeholder="Write your event description..."
            required
            className="w-full"
            rows={6}
          />
        </div>

        <Button type="submit" className="mt-5 bg-blue-900 text-zinc-50">
          Upload Event
        </Button>
      </form>
    </div>
  );
}

export default UploadEvents;

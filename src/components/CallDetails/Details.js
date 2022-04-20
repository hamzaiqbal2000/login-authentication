import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { pusherSDK } from "../../services/PusherSDK";
import { ArchiveRequest } from "../../services/ArchiveRequest";

const Details = ({ node }) => {
  let count = 1;
  const [archive, setArchive] = useState();

  async function archivehandler(e) {
    //fetch call
    //e.preventDefault();
    const arch = await ArchiveRequest(node);
    console.log(arch);
  }
  useEffect(() => {
    var channel = pusherSDK();
    //listen for events on the channel
    channel.bind("update-call", (data) => {
      //method to be dispatched on trigger
      console.log(data);
    });
  }, []);

  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <ul>
            <li>
              <strong>Call type: </strong> {node.call_type}
            </li>
            <li>
              <strong>Created at: </strong> {node.created_at}
            </li>
            <li>
              <strong>Direction: </strong> {node.direction}
            </li>
            <li>
              <strong>Direction: </strong> {node.duration}
            </li>
            <li>
              <strong>From: </strong> {node.from}
            </li>
            <li>
              <strong>Id: </strong> {node.id}
            </li>
            <li>
              <strong>is_archived: </strong> {node.is_archived}
            </li>

            <Button
              style={{ marginTop: "0.7rem", marginBottom: "0.7rem" }}
              type="submit"
              onClick={archivehandler}
            >
              Archive
            </Button>
            <li>
              <strong>to: </strong> {node.to}
            </li>
            <li>
              <strong>via: </strong> {node.via}
            </li>

            {node.notes.map((note) => (
              <li key={note.id}>
                <strong>content {count++}</strong> : {note.content}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default Details;

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";

import { isValidUrl } from "./utils";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState([]);
  const [backgroundPageConnection, setBackgroundPageConnection] =
    useState(null);

  useEffect(() => {
    // no need connection in dev mode
    console.log(import.meta.env.MODE);
    if (import.meta.env.MODE !== "development") {
      setBackgroundPageConnection(
        chrome.runtime.connect({
          name: "burpbar",
        }),
      );
    }
  }, []);

  useEffect(() => {
    if (backgroundPageConnection) {
      backgroundPageConnection.onMessage.addListener(function (message) {
        console.log(message, "seven");
        setRows((originRows) => [...originRows, message]);
      });
    }
  }, [backgroundPageConnection]);

  // useEffect(() => {
  //   if (value && isValidUrl(value)) {
  //     // const url = new URL(value);
  //   }
  // }, [value]);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>Import</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>List all the domains</AlertDialogTitle>
            <AlertDialogDescription>
              <Textarea
                placeholder="domains"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                style={{ height: "100px" }}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (import.meta.env.MODE !== "development") {
                  backgroundPageConnection.postMessage({
                    name: "batch requests",
                    data: value
                      .split("\n")
                      .map((domain) => `https://${domain}`),
                  });
                }
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">URL</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Content Length</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(({ url, contentLength, status, title }) => (
            <TableRow key={url}>
              <TableCell className="font-medium">{url}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell className="text-right">{contentLength}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;

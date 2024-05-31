import usePlaylist from "@/Hooks/useplaylist";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

function ListMovie() {
  const { playlist } = usePlaylist();
  return (
    <>
      <div className="flex gap-2">
        {console.log(playlist)}
        {playlist.map((movie, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{movie.data.title}</CardTitle>
            </CardHeader>
            <ul>
              {Object.keys(movie.data).map((key) => (
                <li key={key} className="flex flex-row w-full ">
                  <div className="font-bold">{key}:</div>
                 {movie.data[key]}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ListMovie;

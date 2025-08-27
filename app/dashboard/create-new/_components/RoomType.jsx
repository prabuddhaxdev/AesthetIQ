import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger,SelectValue,} from "@/components/ui/select";

function RoomType({selectedRoomType}) {
  return (
    <div>
      <label>Select Room Type</label>
      <Select onValueChange={(value)=>selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Living Room">Living Room</SelectItem>
            <SelectItem value="Bedroom">Bedroom</SelectItem>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
            <SelectItem value="Bathroom">Bathroom</SelectItem>
            <SelectItem value="Drawing Room">Drawing Room</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;

"use client";
import React from "react";
import Select from "react-select";

interface Props {
  onChange: (filter: string | undefined) => void;
}

const OPTIONS = [
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];

const DropDown: React.FC<Props> = ({ onChange }) => (
  <Select
    className="w-48"
    classNamePrefix="select"
    placeholder="select a filter"
    isClearable
    name="filter"
    onChange={(e) => onChange(e?.value)}
    options={OPTIONS}
  />
);

export default DropDown;

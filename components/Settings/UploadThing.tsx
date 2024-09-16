"use client";

import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

export default function UploadThing() {
  const [imageURL, setImageURL] = useState<string>("");
  return (
    <div>
      <UploadButton
        className="text-red-900"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageURL(res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageURL.length ? (
        <div>
          <Image src={imageURL} alt="my image" width={300} height={300} />
        </div>
      ) : null}
    </div>
  );
}

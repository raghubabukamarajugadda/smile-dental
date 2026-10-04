"use client";

import { useState } from "react";

import ModalVideo from "react-modal-video";
import { LuPlay } from "react-icons/lu";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="sh-legacy__tour"
        onClick={() => setOpen(true)}
      >
        <span className="sh-legacy__tour-play">
          <LuPlay />
        </span>
        <span className="sh-legacy__tour-text">
          <strong>Watch Our Clinic Tour</strong>
          <small>1:30 min</small>
        </span>
      </button>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="g-jj4KrmYPI?si=7UN07ey9IAgu2ry5"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

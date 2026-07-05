"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Layers3,
  Truck,
  Ruler,
} from "lucide-react";
import Image from "next/image";

const whatsappLink =
  "https://wa.me/525539198342?text=Hola,%20quiero%20cotizar%20melamina,%20MDF%20y%20tableros%20para%20mi%20proyecto";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#1f1812_0%,#2b2118_42%,#111111_100%)] text-white"
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>
    </section>
  );
}

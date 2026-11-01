"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  ASCII / Halftone Reaching Hands (Creation of Adam)                */
/*  Theme-compliant: Red ink (#e52424) on paper background            */
/*  Left: "Dissolving Red Pixel Hand Reaching"                        */
/*  Right: "Red ASCII Halftone Hand Pointing Left"                     */
/*  Emerging cleanly from left & right margins outside the UI card     */
/* ------------------------------------------------------------------ */

export const LEFT_HAND_ASCII = `                   -=-: : :-+***++*=:
                 :-=++==------+*=--==+****+=:
              :-=*%%@@@@@@#-:: :--::---::-=+%=
         :-=+*#%@@@@@@@@%=-   :-==**=-:::-+%@#=
 -::-..:--=+#%%@@@@@@@@@%#+=:   :-%@%#@+---+-++%@-
 ======---=*#%@@@@@@@@#:    ++*+-  :=@@@@@@@@@@@#==%=
 *++++=-=+**#%@@@@@@@@@@#:        +%#+--++#%%@@@@@@@@@*=#+
 +++++====+*#%@@@@@@@@@@@@%:    :::        ----+%@@%=@@@@@-++@
 =----=+**#%@@@@@@@@@@@@=                     :*+#@%  @@@@# :
 ====+++*#%@@@@@@@@@#-                         =@@=== =@@@%
 ++**##%@@@@@@@@%:                             :+      ##*@
 %%@@@@@@@@@@@+
 @@@@@@@@@@=
 @@@@@%*:`;

export const RIGHT_HAND_ASCII = `                                  :---::: ::::::::::::----=+#
                    : ::-------:::--:::-------:::::----=+*###%
     :-=====-----: ::-: :::=- :+%%@%%%#*+=-----:---------:::-=
++=+##%@#+*#=::-####=:::::=#@@@#*%@@%%#*+==------:::::: :::-=*
 :::     :+#*#+*#- :=+::=#@@@@@@@%%%%@%%##****+====------=+*#
            =%*: -*%@#+*%@@@@@@@@@@@@@@@@%%@@@@@@%%######%%@@
         :==-=-+%@@@@@@@@@@@@@@+=+@@@@@@@@@@@@@@@@@@@@@@@@@@@
        -====#@#%+:=%#@@@@@@*:      :*=#%%@@@@@@@@@@@@@@@@@@@
         :*%@#+%@*+@%%@@@+:        :=-:-::::::   ::::-+#@@@%*
         =*@@+@# +#@+:::            -:: ::        ::::---=++*
         -#@#@* -#@%               ::: :           ::::-==+++
          *@*%-  --=                :           :  :::--=-+++`;

export function AsciiHandLeft({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{
        opacity: 1,
        x: [0, 8, 0],
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={cn("relative flex items-center justify-end pointer-events-none select-none max-w-full", className)}
    >
      {/* High-Res Dissolving Red Pixel Reaching Hand (Zero Background, Zero Aura) */}
      <img
        src="/hand_left_ascii.png"
        alt="Dissolving red pixel hand reaching"
        className="w-auto h-[170px] sm:h-[210px] md:h-[250px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] max-w-none object-contain"
      />
    </motion.div>
  );
}

export function AsciiHandRight({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{
        opacity: 1,
        x: [0, -8, 0],
        y: [0, 4, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.2 },
        x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
      }}
      className={cn("relative flex items-center justify-start pointer-events-none select-none max-w-full", className)}
    >
      {/* High-Res Red ASCII Halftone Hand Pointing Left (Zero Background, Zero Aura) */}
      <img
        src="/hand_right_ascii.png"
        alt="Red ASCII halftone hand pointing left"
        className="w-auto h-[170px] sm:h-[210px] md:h-[250px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] max-w-none object-contain"
      />
    </motion.div>
  );
}

/* Backward-compatible background wrapper that strictly stops before the central 896px card */
export function AsciiHandsBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-between"
    >
      {/* Left Hand: anchored to left edge, stops before center card */}
      <div className="hidden lg:flex w-[calc((100vw-56rem)/2)] justify-end pr-2 overflow-hidden">
        <AsciiHandLeft />
      </div>

      {/* Spacer matching central card */}
      <div className="w-full max-w-4xl shrink-0" />

      {/* Right Hand: anchored to right edge, stops before center card */}
      <div className="hidden lg:flex w-[calc((100vw-56rem)/2)] justify-start pl-2 overflow-hidden">
        <AsciiHandRight />
      </div>
    </div>
  );
}

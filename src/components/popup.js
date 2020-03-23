import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';

export default function Popup() {
  return (
    <DialogOverlay
      isOpen
      className="fixed inset-0 z-50 flex w-full h-full overflow-auto bg-transparent-black backdrop-blur"
    >
      <DialogContent className="relative flex-1 w-full mx-4 my-24 outline-none">
        <div className="grid w-full max-w-lg gap-3 px-4 py-6 mx-auto text-xl bg-white rounded sm:px-6 sm:py-8 lg:text-3xl">
          <p>
            Due to social distancing recommendations, CoLab will be closed for
            now.
          </p>
          <p>We will advise when our doors reopen.</p>
          <p>
            Thank you for your continued support. We can't wait to share the
            CoLab space with you again soon!
          </p>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}

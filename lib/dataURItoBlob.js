export function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  let byteString = atob(dataURI.split(',')[1]);
  // separate out the mime component
  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  // write the bytes of the string to an ArrayBuffer
  // eslint-disable-next-line no-undef
  let ab = new ArrayBuffer(byteString.length);
  // create a view into the buffer
  // eslint-disable-next-line no-undef
  let ia = new Uint8Array(ab);
  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  // write the ArrayBuffer to a blob, and you're done
  let hello = new Blob([ab], { type: mimeString });
  return hello;
}

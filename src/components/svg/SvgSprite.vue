<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none">
    <symbol id="calendar" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.4 4.65H3.6a2.102 2.102 0 0 0-2.1 2.1V19.7a2.102 2.102 0 0 0 2.1 2.1h16.8a2.102 2.102 0 0 0 2.1-2.1V6.75a2.102 2.102 0 0 0-2.1-2.1zm0 16.45H3.6a1.4 1.4 0 0 1-1.4-1.4V9.2h19.6v10.5a1.4 1.4 0 0 1-1.4 1.4zM17.95 3.95V2.2a.7.7 0 0 0-1.4 0v1.75zm-10.5 0V2.2a.7.7 0 0 0-1.4 0v1.75z"/>
      <path d="M7.498 15.942a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1h-2.2a1 1 0 0 1-1-1v-1.6a1 1 0 0 1 1-1zm5.602 0a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1h-2.2a1 1 0 0 1-1-1v-1.6a1 1 0 0 1 1-1zm-5.602-5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1h-2.2a1 1 0 0 1-1-1v-1.6a1 1 0 0 1 1-1zm5.602 0a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1h-2.2a1 1 0 0 1-1-1v-1.6a1 1 0 0 1 1-1zm5.602 0a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1h-2.2a1 1 0 0 1-1-1v-1.6a1 1 0 0 1 1-1z" opacity=".48"/>
    </symbol>
    <symbol id="macaddress" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Zm-8.5 3h-5A1.5 1.5 0 0 0 5 7.5v2A1.5 1.5 0 0 0 6.5 11h5A1.5 1.5 0 0 0 13 9.5v-2A1.5 1.5 0 0 0 11.5 6Z"/>
      <path d="M8 21h8m-4-4v4" stroke="currentColor" stroke-width="2" opacity=".48" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="password" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.65 10a5.998 5.998 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </symbol>
    <symbol id="enabled" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22Z"/>
    </symbol>
    <symbol id="speedometr" viewBox="0 0 24 24" fill="currentColor">
      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/>
      <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" opacity=".48"/>
    </symbol>
    <symbol id="user" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" opacity=".48"/>
      <path d="M18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1z"/>
    </symbol>
    <symbol id="disabled" viewBox="0 0 24 24" fill="currentColor" >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z" />
    </symbol>
    <symbol id="bin" viewBox="0 0 64 64" fill="currentColor">
      <path d="M28 9a2 2 0 0 0-2 2v1H14a2 2 0 0 0 0 4h1v30c0 3.309 2.691 6 6 6h22c3.309 0 6-2.691 6-6V16h1a2 2 0 0 0 0-4H38v-1a2 2 0 0 0-2-2h-8zm-9 7h26v30c0 1.103-.897 2-2 2H21c-1.103 0-2-.897-2-2V16zm4.5 4a1.5 1.5 0 0 0-1.5 1.5v21a1.5 1.5 0 1 0 3 0v-21a1.5 1.5 0 0 0-1.5-1.5zm8.5 0a2 2 0 0 0-2 2v20a2 2 0 0 0 4 0V22a2 2 0 0 0-2-2zm8.5 0a1.5 1.5 0 0 0-1.5 1.5v21a1.5 1.5 0 1 0 3 0v-21a1.5 1.5 0 0 0-1.5-1.5z"/>
    </symbol>
    <symbol id="ok" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
      <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm4.293 4.293L10 14.586l-2.293-2.293-1.414 1.414L10 17.414l7.707-7.707-1.414-1.414z"/>
    </symbol>
</svg>
</template>
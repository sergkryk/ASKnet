<template>
  <button type="button"></button>
</template>

<style lang="scss" scoped>
button {
  --size: 2rem;
  --contentColor: var(--color-green);
  
  padding: 0;
  width: 2rem;
  height: 2rem;
  
  line-height: normal;
  overflow: visible;
  cursor: pointer;

  background: none;
  border: 0;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc((var(--size)/2) - 1px);
    left: 0;

    width: var(--size);
    height: 2px;

    background-color: var(--contentColor);
    transform-origin: center;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
  &:hover {
    --contentColor: var(--color-lightblue);
  }
  &:focus {
    outline: 1px solid var(--color-green);
    outline-offset: 3px;
  }
}
</style>
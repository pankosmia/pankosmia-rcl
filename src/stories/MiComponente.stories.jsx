import MiComponente from "../components/MiComponente";

export default {
  component: MiComponente,
  title: "Mi Componente",
  parameters: {
    layout: "centered",
  },
};

const datosDelServidor = [
  {
    id: 1,
    name: "John",
  },
];

export const ExampleJohn = {
  args: {
    name: "John",
    datosDelServidor,
  },
};

export const ExampleJane = {
  args: {
    name: "Jane",
    datosDelServidor,
  },
};
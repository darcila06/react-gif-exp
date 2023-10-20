const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");
jest.mock("../../src/hooks/useFetchGifs");

describe("Prueba sobre GifGrid", () => {
  const category = "One Punch";

  test("debe de mostrar el loading iniclmente", () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...."));
    expect(screen.getByText(category));
  });

  test("debe mostrar las items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ADB",
        title: "Saitama",
        url: "https://localhost/Saitama.jpg",
      },
      {
        id: "ABC",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });

    render(<GifGrid category={category} />);
    
    expect(screen.getAllByRole('img').length).toBe(2);

  });
});

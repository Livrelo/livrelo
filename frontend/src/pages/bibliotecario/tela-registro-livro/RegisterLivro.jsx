import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import NavbarB from "../../../components/navbar-bib/NavbarB.jsx";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material/";
import useLivrosStore from "../../../zustand/livro/livro.js";
import useCategoriaStore from "../../../zustand/categoria/categoria.js";
import useLivroCategoriaStore from "../../../zustand/livroCategoria/livroCategoria.js";
import SelectInput from "../../../components/SelectInput/Select.jsx";
import "./style.css";
import { useNavigate } from "react-router-dom";

function RegisterLivro() {
  const { fetchCategorias, categorias } = useCategoriaStore();
  const [opCategorias, setopCategorias] = useState();
  const [selectedCategorias, setSelectedCategorias] = useState([]);

  useEffect(() => {
    fetchCategorias();
  }, []);
  useEffect(() => {
    if (categorias) {
      const _categoriasList = categorias.map((categoria) => ({
        label: categoria.nome,
        value: categoria.idCategoria,
      }));
      setopCategorias(_categoriasList);
    }
  }, [categorias]);

  const [img, setImg] = useState("");
  const theme = createTheme({
    palette: {
      blues: {
        main: "#2a4fa0",
        light: "#162E62",
        dark: "#112757",
        contrastText: "#ffffff",
      },
      whites: {
        main: "#162E62",
        dark: "#fffffff",
        light: "#ffffff",
        contrastText: "#162E62",
      },
      reds: {
        main: "#ec1a1a",
        dark: "#cf2f2f",
        light: "#ec6262",
        contrastText: "#f5f5f5",
      },
    },
  });
  const initialValues = {
    titulo: "",
    autor: "",
    descricao: "",
    editora: "",
    ano: "",
  };

  const validationSchema = Yup.object({
    titulo: Yup.string().required("O titulo é obrigatório"),
    autor: Yup.string().required("O nome do autor é obrigatório"),
    descricao: Yup.string().required("A descrição é obrigatória"),
    editora: Yup.string().required("O nome da editora é obrigatória"),
    ano: Yup.date().required("O ano de lançamento do livro é obrigatório."),
  });

  async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const navigate = useNavigate();

  async function handleImageChange(event) {
    const inputFile = document.querySelector("#ft_input");
    const pictureImage = document.querySelector(".ft_image");
    const pictureImgTxt = "Escolha uma imagem";

    if (!inputFile || !pictureImage) {
      throw new Error(
        "DOM elements not found. Ensure #ft_input and .ft_image exist."
      );
    }

    const file = event.target.files[0];
    setImg(file);

    if (file) {
      const reader = new FileReader();

      try {
        const imageData = await new Promise((resolve, reject) => {
          reader.addEventListener("load", () => resolve(reader.result));
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });

        pictureImage.innerHTML = ""; //limpa a imagem usada anteriormente
        const img = document.createElement("img");
        img.src = imageData;
        img.classList.add("ft_img");
        pictureImage.appendChild(img);
      } catch (error) {
        console.error("Error loading image:", error);
        pictureImage.innerHTML = pictureImgTxt; // mostra um erro caso ocorra
      }
    } else {
      pictureImage.innerHTML = pictureImgTxt;
    }
    inputFile.addEventListener("change", handleImageChange);
  }

  const { createLivro, fetchLivros } = useLivrosStore();
  const { createLivroCategoria } = useLivroCategoriaStore();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await createLivro({
        nome: values.titulo,
        descricao: values.descricao,
        nomeAutor: values.autor,
        ano: values.ano,
        nomeEditora: values.editora,
        livroImage: img,
      });
      await fetchLivros();
      for (const categoria of selectedCategorias) {
          await createLivroCategoria(
          response.data.livro.idLivro,
          categoria
        );
        
      }
      await wait(2000);
      console.log(response);
      if (response) {
        navigate("/acervo-b");
      }
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  const handleChangeCategoria = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategorias(typeof value === "string" ? value.split(",") : value);
    console.log(selectedCategorias);
  };
  return (
    <>
      <NavbarB />
      <div className="container_createLivro">
        <div className="box-cadastro-livro">
          <span className="box-cadastro-title"> Cadastro do Livro</span>
          <div className="cadastro-livro-create">
            <div className="cadastro-livro-create-l">
              <label className="ft" for="ft_input" tabIndex={0}>
                <span className="ft_image">Escolha uma imagem</span>
              </label>
              <input
                className="ft_input"
                id="ft_input"
                name="file"
                type="file"
                accept="image/"
                onChange={handleImageChange}
              />
            </div>
            <Box className="cadastro-livro-create-r">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, dirty }) => (
                  <Form>
                    <Input
                      name="titulo"
                      label="Título"
                      placeholder="Digite o Título do livro"
                      type="text"
                    />
                    <Input
                      name="autor"
                      label="Autor"
                      placeholder="Digite o nome do autor do livro"
                      type="text"
                    />
                    <Input
                      name="descricao"
                      label="Descrição"
                      placeholder="Digite a descrição do livro"
                      type="text"
                    />
                    <Input
                      name="ano"
                      label="Ano"
                      placeholder="Digite o ano de lançamento do livro"
                      type="text"
                    />
                    <Input
                      name="editora"
                      label="Editora"
                      placeholder="Digite a editora do livro"
                      type="text"
                    />
                    {opCategorias && (
                      <SelectInput
                        label={"Categoria"}
                        value={selectedCategorias}
                        onChange={handleChangeCategoria}
                        opcao={opCategorias}
                        labelHelp={"Selecione a categoria mais adequada"}
                      />
                    )}
                    <ThemeProvider theme={theme}>
                      <Button
                        className="btn-form-create-livro"
                        type="submit"
                        variant="contained"
                        color="blues"
                        size="large"
                        disabled={!isValid || !dirty}
                      >
                        Cadastrar Livro
                      </Button>
                    </ThemeProvider>
                  </Form>
                )}
              </Formik>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterLivro;

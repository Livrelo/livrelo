import {MenuItem,InputLabel,FormHelperText,FormControl, Select} from '@mui/material/';

function SelectInput({label, value, opcao, labelHelp}){
    return(
    <FormControl sx={{ m: 0, minWidth:"100%"}}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label="Categoria"
        // onChange={}
        >
            <MenuItem value="">
                <em>Nenhuma</em>
            </MenuItem>
            {opcao.map((opcao)=>(
                <MenuItem value={opcao}>{opcao}</MenuItem>
            ))}
        </Select>
        <FormHelperText>{labelHelp}</FormHelperText>
    </FormControl>
    )
}

export default SelectInput
import {MenuItem,InputLabel,FormHelperText,FormControl, Select} from '@mui/material/';

function SelectInput({label, value, opcao, labelHelp, onChange}){
    return(
    <FormControl sx={{ m: 0, minWidth:"100%"}}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
        onChange={onChange}
        labelId="demo-simple-select-helper-label"
        
        value={value}
        label="Categoria"
        multiple={true}
        // onChange={}
        >
            {opcao.map((opcao)=>(
                <MenuItem value={opcao.value}>{opcao.label}</MenuItem>
            ))}
        </Select>
        <FormHelperText>{labelHelp}</FormHelperText>
    </FormControl>
    )
}

export default SelectInput
import styled from "styled-components";
import { IRow } from "./Row";

const Row = styled.div<IRow>`
    display: flex;
    
    .col{
        flex: 1 0;
    }
`

export default {Row}
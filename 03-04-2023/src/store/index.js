import {createContext} from "react";

export const initGlobalState = {
    value:0,
};

export const GlobalContext = createContext({});

/* Per creare un contesto si usa createContext 
    inoltre al contesto bisogna definire un oggetto forrmato da 1 o più valori


    Dopo aver creato un contesto e un oggetto..nel contesto principale es.App possiamo
    richiamare il contesto come componente <GlobalContext seguito da .Provider
*/
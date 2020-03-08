export const STAGE_WIDTH = 12;
export const  STAGE_HEITGHT = 20;


export const createStage = () => {
    return Array.from(Array(STAGE_HEITGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear'])
        
        )
}
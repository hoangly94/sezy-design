import tailwindStyles from '../src/index.css';

type Argument = string | undefined;

export const Classes = (...classes: Argument[]): string=>{
    // const newClasses:string[] = [];
    // const reverseClasses = classes.reverse();
    // for(const i in reverseClasses){
    //     reverseClasses.filter((item, index)=> index < +i && item);
    // }
    
    // const buffer:string[] = [];
    // for(const c of classes){
    //     if(c)
    //         for(const i of c?.split(' ')){
    //             buffer.push(tailwindStyles[i] ?? i);
    //         }
    // }
    // return buffer.join(' ');
    return classes.join(' ');
}

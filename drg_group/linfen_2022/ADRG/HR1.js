import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HR1_group(record){
    let adrg_zd=["C22.000","C22.001","C22.100","C22.101","C22.200","C22.300","C22.301","C22.400","C22.700","C22.900","C23.x00","C24.000","C24.000x007","C24.001","C24.002","C24.003","C24.004","C24.100","C24.101","C24.800","C24.800x001","C24.900","C25.000","C25.100","C25.200","C25.300","C25.400","C25.401","C25.701","C25.800x001","C25.801","C25.802","C25.803","C25.900","C45.704","C77.203","C77.204","C78.700","C78.800x009","C78.806","C78.807","C78.808","D01.500x001","D01.501","D01.502","D01.503","D01.700","D01.701","K92.800x006","K92.800x009","K92.800x010","K92.800x012"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合HR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HR13_group(record)){
            return 'HR13';
        }

        if (drg.HR15_group(record)){
            return 'HR15';
        }

        return 'HR1';
    }else{
        return '';
    }
}
  
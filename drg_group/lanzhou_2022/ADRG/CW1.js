import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCC_DRG} from '../DRG/MDCC_DRG.js';

export default function CW1_group(record){
    let adrg_zd=["E10.300x091+H28.0*","E10.302+H28.0*","E11.300x091+H28.0*","E11.302+H28.0*","E14.300x061+H28.0*","E14.300x091+H28.0*","E20.902+H28.1*","E83.500x006+H28.1*","E88.906+H28.1*","H25.000","H25.000x002","H25.000x003","H25.000x005","H25.000x006","H25.000x007","H25.001","H25.002","H25.004","H25.100","H25.200","H25.800","H25.800x001","H25.800x002","H25.900","H26.000x001","H26.000x002","H26.000x005","H26.001","H26.002","H26.003","H26.100","H26.200","H26.200x005","H26.201","H26.202","H26.300","H26.300x001","H26.300x004","H26.301","H26.400","H26.400x002","H26.400x003","H26.401","H26.801","H26.802","H26.900","H26.901","H27.000","H27.100","H27.101","H27.102","H27.800","H27.800x001","H27.900","Q12.000","Q12.001","Q12.002"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合CW1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCC_DRG();
        
        if (drg.CW1A_group(record)){
            return 'CW12';
        }

        if (drg.CW15_group(record)){
            return 'CW15';
        }

        return 'CW1';
    }else{
        return '';
    }
}
  
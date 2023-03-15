import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["08.2200x003","08.2201","09.7300x001","09.7300x004","09.7301","18.2100x006","18.2101","18.2900x003","18.2900x009","18.2900x013","18.2900x016","18.2900x017","18.2901","18.2902","18.2903","18.2904","18.2905","18.2907","18.3100","18.3900x003","18.3901","20.5100x002","21.3201","21.4x00","21.7200","21.7200x001","21.8100","27.0x01","27.0x02","27.0x03","27.0x04","27.0x05","27.0x06","27.0x08","27.0x09","27.0x10","27.0x11","27.4200","27.4301","27.4302","27.9900x005","27.9901","29.2x00x001","29.5200x002","34.0101","34.0102","34.4x01","34.7101","34.7900x001","38.5900x003","38.5900x005","38.5901","38.5902","38.5903","38.5905","38.5906","38.6000x011","38.6000x013","38.8901","39.2900x015","39.9800x001","39.9801","40.0x01","40.2100","40.2300","40.2400","40.2900x002","40.2900x008","40.2900x020","40.2901","40.2902","40.2904","40.2906","40.2908","40.2910","40.3x00x001","40.3x00x002","40.3x00x003","40.3x00x005","40.5400x001","40.9x00x003","40.9x00x004","40.9x00x008","40.9x00x009","40.9x00x010","40.9x00x013","40.9x00x014","40.9x00x015","40.9x00x016","40.9x09","49.3905","54.0x00x001","54.0x00x002","54.0x00x004","54.0x00x006","54.0x00x010","54.0x00x013","54.0x00x018","54.0x00x021","54.0x00x022","54.0x00x023","54.0x00x024","54.0x00x025","54.0x01","54.0x02","54.0x03","54.2200x003","54.3x00x004","54.3x00x010","54.3x00x027","54.3x01","54.3x02","54.3x03","54.3x04","54.3x05","54.3x06","54.3x07","54.3x08","54.4x00x012","54.4x00x047","54.6301","54.7200x001","58.3906","61.3x03","61.3x04","61.4101","61.4102","64.0x00","64.2x00x001","64.2x00x002","64.2x00x003","64.2x01","64.9100x002","65.5100x001","71.0900x001","71.0900x004","71.0901","71.0902","71.0903","71.0904","71.0905","71.2400x001","71.2400x003","71.3x00x001","71.3x00x007","71.3x00x011","71.3x00x013","71.3x01","71.3x04","71.6100","71.6200","71.7101","71.7102","82.2900x001","83.0902","83.0904","83.3900x017","83.3904","86.0100x005","86.0200x003","86.0200x004","86.0200x006","86.0201","86.0202","86.0301","86.0302","86.0400x011","86.0401","86.0500x007","86.0501","86.0502","86.0503","86.0900x002","86.0900x007","86.0900x008","86.0900x009","86.0901","86.0902","86.0903","86.2101","86.2102","86.2300x001","86.2300x002","86.2300x003","86.2300x005","86.2301","86.2400x001","86.2500","86.2600x004","86.2600x005","86.2601","86.2602","86.2701","86.3x01","86.3x02","86.3x03","86.3x05","86.3x06","86.3x07","86.3x08","86.3x09","86.3x10","86.3x10x038","86.3x10x067","86.3x10x068","86.3x10x069","86.3x10x070","86.3x10x071","86.3x11","86.3x12","86.3x13","86.3x14","86.3x15","86.4x01","86.4x02","86.4x03","86.5900x006","86.5901","86.8401","86.8402","86.8403","86.8600x001","86.9000x001","86.9200x002","86.9201","86.9900","98.2600x001","98.2700x001","98.2800x001","98.2900x001"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合JJ1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JJ11_group(record)){
            return 'JJ11';
        }

        if (drg.JJ13_group(record)){
            return 'JJ13';
        }

        if (drg.JJ15_group(record)){
            return 'JJ15';
        }

        return 'JJ1';
    }else{
        return '';
    }
}
  
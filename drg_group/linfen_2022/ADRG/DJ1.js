import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["04.0101","04.0102","04.0103","04.0202","04.0205","04.0300x011","04.0303","04.0304","04.0401","04.0402","04.0404","04.0405","04.0406","04.0407","04.0408","04.0705","04.0706","04.0708","04.0710","04.0711","04.0712","04.0724","04.0726","04.0728","04.4101","04.4203","04.4204","04.4205","04.4206","04.4207","04.4209","04.4211","04.4212","04.4213","04.4902","04.6x02","04.6x03","04.7100","04.7200","04.7402","04.7404","04.7405","04.7406","04.8103","06.0100x001","06.7x00","06.7x00x003","06.7x01","06.7x02","09.4300","09.4402","09.4404","09.4900x002","09.9900x002","18.3100","18.3900x005","18.9x00x007","18.9x00x009","18.9x00x010","20.9901","20.9902","20.9903","21.0400","21.3200x007","21.9900x002","23.0100","23.0900x003","23.1100","23.1900x003","23.1900x006","23.1900x007","23.1901","23.1902","23.4200","23.4900x001","23.6x00x002","23.6x00x003","23.6x00x004","23.7100","23.7200","23.7300","23.7300x001","23.7301","24.0x00x002","24.0x00x003","24.0x01","24.0x02","24.0x03","24.0x04","24.2x00","24.2x01","24.3100x003","24.3101","24.3200x001","24.3900x001","24.3900x002","24.4x00x002","24.4x01","24.4x02","24.4x03","24.4x04","24.4x05","24.4x06","24.5x00x003","24.5x00x005","24.5x01","24.5x02","24.5x03","24.5x04","24.5x05","24.6x01","24.6x02","24.6x03","24.8x03","24.8x04","24.9101","24.9102","24.9103","24.9104","24.9105","24.9900","25.1x01","25.1x02","25.1x03","25.1x04","25.1x05","25.5100x001","25.5900x002","25.5900x008","25.5900x009","25.5900x010","25.5900x011","25.5900x012","25.5901","25.5902","25.5903","25.5904","25.5905","25.5906","25.9100x001","25.9101","25.9200","25.9300","25.9400x001","25.9400x002","25.9900x001","27.0x01","27.0x02","27.0x03","27.0x04","27.0x05","27.0x06","27.0x08","27.0x09","27.0x10","27.0x11","27.1x01","27.1x02","27.3101","27.3102","27.3103","27.3104","27.3200x001","27.3201","27.3202","27.3203","27.4100","27.4200","27.4300x010","27.4300x011","27.4301","27.4302","27.4900x007","27.4900x009","27.4900x014","27.4900x018","27.4900x019","27.4900x020","27.4901","27.4902","27.4903","27.4904","27.4905","27.4906","27.4907","27.4908","27.4909","27.4910","27.5100","27.5200","27.5500x002","27.5600x002","27.5601","27.5700x005","27.5701","27.5702","27.5703","27.5903","27.7200","27.7201","27.7301","27.7901","27.9900x001","27.9900x005","27.9900x006","27.9900x007","27.9900x009","27.9900x010","27.9901","27.9902","27.9903","27.9904","28.0x00x003","28.9100","29.9900","33.2400x002","33.2400x002","33.2402","33.2405","33.2701","33.2702","33.2900","38.6000x012","38.6000x013","39.2900x013","39.5300x013","39.7900x013","39.9000x034","39.9008","39.9800x001","39.9800x003","39.9801","40.1100x003","40.2100","40.2900x002","40.2900x008","40.2900x021","40.2900x022","40.2900x024","40.2901","40.2910","40.3x00x001","40.3x00x002","40.3x00x005","40.4000x003","40.4100","40.4200","40.5901","40.9x00x003","40.9x00x004","40.9x00x008","40.9x00x009","40.9x00x010","40.9x00x013","40.9x00x014","40.9x00x015","40.9x00x016","40.9x09","42.0902","42.1100","42.1901","42.2500","42.3100x001","42.4100x008","79.7900x002","83.1900x005","86.2200x011","86.2800x012","86.7406","86.7407","86.8702","86.8900x002","86.8900x014","86.9301","86.9302","98.2201","98.2204"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DJ19_group(record)){
            return 'DJ19';
        }

        return 'DJ1';
    }else{
        return '';
    }
}
  
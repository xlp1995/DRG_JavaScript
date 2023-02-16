import {putMessage,intersect,SS_VALID} from '../Base.js'
import FB1_group from '../ADRG/FB1.js';
import FB2_group from '../ADRG/FB2.js';
import FC1_group from '../ADRG/FC1.js';
import FD1_group from '../ADRG/FD1.js';
import FD2_group from '../ADRG/FD2.js';
import FD3_group from '../ADRG/FD3.js';
import FE1_group from '../ADRG/FE1.js';
import FE2_group from '../ADRG/FE2.js';
import FF2_group from '../ADRG/FF2.js';
import FF1_group from '../ADRG/FF1.js';
import FF3_group from '../ADRG/FF3.js';
import FJ1_group from '../ADRG/FJ1.js';
import FK1_group from '../ADRG/FK1.js';
import FK2_group from '../ADRG/FK2.js';
import FK3_group from '../ADRG/FK3.js';
import FL1_group from '../ADRG/FL1.js';
import FL2_group from '../ADRG/FL2.js';
import FL3_group from '../ADRG/FL3.js';
import FM1_group from '../ADRG/FM1.js';
import FM2_group from '../ADRG/FM2.js';
import FM3_group from '../ADRG/FM3.js';
import FM4_group from '../ADRG/FM4.js';
import FN1_group from '../ADRG/FN1.js';
import FN2_group from '../ADRG/FN2.js';
import FP1_group from '../ADRG/FP1.js';
import FR1_group from '../ADRG/FR1.js';
import FR2_group from '../ADRG/FR2.js';
import FR3_group from '../ADRG/FR3.js';
import FR4_group from '../ADRG/FR4.js';
import FT1_group from '../ADRG/FT1.js';
import FT2_group from '../ADRG/FT2.js';
import FT3_group from '../ADRG/FT3.js';
import FT4_group from '../ADRG/FT4.js';
import FU1_group from '../ADRG/FU1.js';
import FU2_group from '../ADRG/FU2.js';
import FV1_group from '../ADRG/FV1.js';
import FV2_group from '../ADRG/FV2.js';
import FV3_group from '../ADRG/FV3.js';
import FW1_group from '../ADRG/FW1.js';
import FW2_group from '../ADRG/FW2.js';
import FZ1_group from '../ADRG/FZ1.js';

export default function MDCF_group(record){
    let mdc_zd=["I15.200x001","I21.200x030","S75.000x004","T81.702","I50.000x006","S35.902","S26.010","Q26.600","I97.800x001","I07.200","M34.800x009+I52.8*","I70.200x002","I73.804","I30.100x008","I49.900","I72.800x023","S35.903","I10.x00x015","I70.218","I74.901","S26.801","I47.108","T82.601","D44.700x004","Q25.704","A18.808+I32.0*","I72.805","I74.300x330","Q27.307","I80.800x006","I50.002","S45.900x001","I44.000","E14.700x023","R57.100","I25.800x011","I87.101","T81.703","I77.129","I49.802","I08.301","I77.100x029","Q25.700x008","I77.601","C79.808","Q26.800x003","I33.005","Q25.300","I27.900x002","I48.400","I72.000x023","S65.500","I40.000x003","I08.200","I20.004","S75.100x003","I08.100x003","T86.200x001","I97.900","I47.200x001","I51.708","B57.001+I98.1*","I31.001","I08.100","Q24.800","S35.800x001","I20.101","R02.x00","A18.820+I39.8*","Q87.203","T82.800x106","Q28.900","T82.800x405","Q25.900","I08.004","D15.103","I87.100x003","T82.800x003","I21.402","B33.200x002+I39.8*","I80.101","T82.400","I74.303","I27.001","I42.800x005","I21.200x003","I77.800x024","I36.800x005","T82.001","T82.800x105","R94.300x007","S95.100","I21.200x026","Q21.800x003","I77.118","I22.800x016","S85.300x001","I21.400x003","I51.403","Q27.200x002","I42.800x007","I22.800x014","I05.800","Q21.204","Q27.818","I42.800x004","Q24.510","E05.900x004+I43.8*","R94.308","I77.800x021","I71.801","I71.003","Q23.200x003","D18.000x004","I44.302","S75.100x001","T81.700x301","I25.300x006","I74.402","S55.800","I70.000x008","I99.x01","I74.200x004","R55.x00x011","Q25.100","Q21.201","I15.200x004","Q23.800x008","I10.x09","A39.500","I08.100x002","I71.002","I20.800x007","Q27.812","S85.400x001","T82.301","I21.211","S75.700x001","Q25.800x004","I13.000x001","I77.804","S25.001","I20.900","S35.503","I67.200x004","T81.700x105","I74.300x113","I30.100","I27.200x003","Q24.502","D18.000x001","I08.306","I22.800x001","I34.100","I72.000x013","I08.900","I23.100x001","I77.800x002","I87.100x007","T86.300x001","I77.800x017","I86.811","S95.200","I87.200x001","E83.103","I48.301","S35.500x001","T81.700x101","Q85.900x048","T82.102","I44.100","I74.300x223","I48.900x015","S26.800x021","I34.801","I72.800x111","I71.000x006","Q24.511","S75.001","I77.013","E63.901+I43.2*","C49.300x006","I70.217","I87.201","Q25.700x007","I09.802","R94.300","I33.011","I72.501","Q25.406","I72.400x113","I77.806","I22.800x010","I72.403","I97.801","I87.112","I31.902","Q25.701","I07.100","R09.800x082","I82.900x004","Q26.800x008","I74.202","Q24.800x018","I87.118","I25.403","I70.200x031","I86.806","I72.300x033","I77.800x010","I73.800x003","Q23.801","I09.200x001","I51.704","Q23.400","S35.800x002","Q25.703","I49.300x002","T82.900x002","S65.400","I40.000x005","I70.012","Q21.103","R55.x00x009","R93.103","I80.002","I97.800x020","I35.000x002","T82.800x411","I44.300x003","I51.801","I77.114","Q24.807","N18.506+I32.8*","Q24.300x002","I49.400x001","I30.900x003","I15.800x006","I51.400x005","I83.903","Q26.902","I05.200x001","Q24.601","I08.000x008","I78.102","I44.303","I51.701","D18.000x005","Q23.401","Q27.800x042","I20.000","I21.200x024","T81.700x403","T13.400","Q27.800x041","I87.111","Q27.308","I25.300x011","I80.204","Q25.400x012","Q27.200x003","I74.800x006","I42.000x001","Q25.301","I51.700x009","I77.200","I07.900x001","S35.205","Q20.301","I09.000","I70.902","I74.800x004","I77.300x003","I71.000x007","B57.002+I41.2*","I49.301","I09.200x004","I27.200x018","I10.x00x009","I49.800x003","I72.400x232","I27.000x008","I70.901","Q23.200","I70.001","S26.813","I77.126","I77.125","I97.800x008","I21.103","M05.302+I43.8*","Q25.700x011","I74.310","I72.004","I82.802","I50.900","D15.102","I27.200x022","I97.802","I72.400x212","S25.101","S75.000x005","I87.117","S45.300x002","Q25.601","Q25.800x002","I20.807","I80.902","I45.103","I51.301","I08.800x003","S95.800","C75.501","I74.500x011","I37.900","I77.800x018","I37.800","Q82.812","Q20.101","I72.400x010","T82.800x407","I08.300x004","I47.200x013","I72.400x530","S35.500x005","I34.101","I51.501","I72.900x003","I71.600x005","Q23.802","I77.204","Q23.000","I27.200x016","R57.901","I67.200x003","Q26.200x003","I45.200","I08.002","I72.400x112","R03.100","C79.800x863","R94.303","A52.007+I41.0*","Q26.800x006","Q20.801","I77.203","I70.800x005","I74.300x210","I05.900x001","I24.100x001","I77.123","I45.600x004","I80.207","T82.003","I50.900x010","I70.013","S65.000x002","D18.000x837","I48.900x004","I77.127","I74.300x520","R55.x00x001","I15.000","I49.805","I70.000x009","I09.100x001","I21.205","I21.004","I70.010","I51.703","Q22.600","I71.100x003","S85.100x001","T82.502","I49.801","Q82.800x016","I30.801","I40.100","I80.103","I82.806","I72.400x130","S35.200x004","S45.300x001","I51.800x006","E03.900x004+I43.8*","I74.805","I47.203","I77.805","A54.802+I39.8*","I74.501","I77.802","I83.901","E85.416+I43.1*","A39.503+I41.0*","I20.102","B01.800x001+I41.1*","A01.000x016+I41.0*","I71.200x010","Q82.811","I23.601","S26.812","C38.001","I35.000","D18.010","I05.100","I47.107","I08.000x003","T82.100","Q26.200x004","R55.x00x007","C45.200","E11.700x023","S55.700x001","I21.901","I05.000x001","I08.801","D44.701","I30.000","I49.800x006","I97.102","B33.200x001+I32.1*","R68.800x001","I74.800x001","R57.900","I51.803","R00.800","I97.800x006","I72.800x103","I74.300x133","I50.900x014","I50.900x017","I72.303","R93.101","I49.800x007","Q27.800x018","Q27.800x031","I72.400x230","I72.813","I23.200x001","I51.705","I47.200x010","I08.104","I25.400","I83.900x004","M05.307+I39.8*","Q23.300","Q26.000x004","I78.900","S65.100x001","I80.804","I72.300x023","A52.000x006+I39.1*","I10.x13","I15.800x002","I08.000x006","I83.200x001","I27.200x009","I49.402","I73.802","I47.100x014","Q24.507","I35.100","T81.700x204","I72.300x003","I77.600x015","T82.814","I86.814","Q26.901","Q22.000","I72.400x222","I80.301","I80.206","I80.803","I49.804","I21.206","I25.800x006","I78.101","T79.101","Q23.300x002","I70.200x065","T82.800x203","I82.800x005","I71.000x027","I40.800x002","I51.400x006","Q28.200x007","A52.003+I79.0*","E05.903+I43.8*","I70.209","I08.901","I77.800x014","Q24.800x028","I33.000x007","I47.200","I33.000x004","I44.700","I42.801","I25.900","I31.904","Q27.800x020","Q23.200x004","Q23.101","M31.600","S65.000x001","S35.101","I08.000x007","T82.700","I37.100","I74.300x233","S45.701","Q24.200","Q27.001","I08.009","M05.304+I52.8*","S15.000x002","I08.007","I34.200","I45.600","I28.802","I08.300x002","I50.900x007","Q23.800","I72.000x031","I31.101","I51.900x001","I51.702","I21.001","J94.000","Q27.800x034","S35.102","I50.900x018","I33.006","I51.903","I71.500","I71.000x021","I72.800x042","C75.500x001","I46.000","Q25.401","I06.800x001","Q26.800x005","I72.400x310","I26.001","I10.x01","D15.105","S25.700","I44.601","I71.000x003","I77.117","S35.100x003","I45.600x007","Q24.800x017","I70.910","I74.300x030","I71.206","I45.600x005","I87.805","Q24.503","E11.501+I79.2*","I49.100x001","N18.505+I68.8*","I50.105","I10.x14","I15.103","I71.600x004","I74.300x230","I47.000","I08.000x002","I21.200x021","I72.000x012","I50.000x005","I70.201","I48.200","A39.504+I52.0*","I80.209","C49.402","I70.111","I08.006","I25.300x012","I50.908","Q21.104","I77.100x031","Z03.501","I72.400x420","I21.210","T82.800x201","I50.900x002","I72.304","I74.200x006","I25.401","I24.003","I08.102","I08.300x006","I15.200x005","R94.307","B49.x15","I72.100x004","I20.806","Q27.400","I77.800x007","S85.800x001","T81.700x401","Q25.402","I72.005","Z03.400","I71.000x016","I82.800x002","D44.601","I83.001","I72.400x233","Q25.200","Q26.301","I72.400x121","I24.800x007","I42.301","I50.900x016","D15.104","D48.100x024","I72.404","T81.700x205","I42.100x002","I45.500x005","J11.801+I41.1*","I71.000x015","Q20.800x003","Q24.400","I08.103","I72.811","S35.901","I40.002","I70.000x007","I72.400x210","I25.100x003","A54.805+I32.0*","I28.800x007","R09.800x081","I51.700x014","Q21.206","S45.101","I72.201","I72.804","I49.401","I72.400x110","T82.500x003","I97.804","R57.803","I21.200x020","I24.001","I50.900x015","S55.000x001","T82.800x005","T81.700x003","Q24.813","S85.000","I33.900","I77.500","Q25.400x010","T81.700x104","C49.900x001","I38.x01","I44.400","I87.900","I08.005","I77.101","T82.800x307","S35.500x007","I77.000x015","I47.204","S35.500x006","I80.203","S35.300x005","I25.402","I27.100","I27.202","I34.800x006","I15.800x004","D48.711","Q87.400","I77.800x016","I25.600x001","A18.818+I79.8*","I71.000x014","T82.800x301","I72.006","T86.300x002","Q28.900x001","Q24.603","Q21.400x001","I47.100x004","I35.101","Q28.800x007","E13.500x241+I79.2*","I72.400x430","I25.300x005","I72.300x022","Z45.005","I77.121","I49.500","I87.801","I72.000x033","T82.600","I70.203","I30.101","R55.x00x012","J09.x03+I41.1*","T81.700x302","T82.800x304","I71.300","I71.400x002","I20.006","I25.300x007","I28.800x005","I21.200x009","I25.300","Q25.705","I27.000x009","I47.100x001","I72.900x004","Q26.500","I77.604","I72.814","I82.805","I35.808","D18.000x003","Q22.802","D18.000x840","I70.200x005","I72.800x101","A52.000x007+I39.1*","I08.008","I38.x00x006","T82.800x308","I77.603","I47.110","I49.800x010","T86.200x002","T82.810","Q22.400x003","I51.000x001","I72.800x102","I72.200x001","T81.700x005","I11.001","I77.803","S65.401","T70.200x007","I74.102","I86.800x005","T82.100x011","I21.200x027","I10.x00x017","I27.200x012","E16.800x102","T82.800x403","Q22.801","I45.102","I74.200x005","I72.400x123","I08.300","I70.200x021","I28.804","I45.400x001","I05.000","I77.112","T80.000x001","I74.300x212","I74.300x420","I51.404","I20.003","Q26.800x004","I86.800x017","S35.402","I97.803","T82.800x406","I23.400x001","I72.300x006","Q21.300x002","I78.803","Q25.702","I27.200x020","Q22.301","T82.100x005","I77.800x013","I70.112","I10.x04","I20.000x004","A52.009+I39.3*","I44.602","I42.600","I27.200x006","I08.300x005","S35.300x002","I08.800","I01.800x001","I47.200x008","Q27.800x039","A54.804+I41.0*","I86.805","S35.502","I31.301","I33.010","I48.100","Q20.100","D20.000x002","Q27.803","T81.700x405","Q24.509","I72.402","I72.100x006","I35.200","I72.100x005","Q23.900x001","S35.001","I42.701","I82.900x001","I27.200x015","I72.800x051","Q23.803","T82.100x008","I47.200x006","I82.804","I35.900","I05.900","I49.404","I46.901","Q25.403","Q26.400","I08.800x002","T82.100x007","I72.400x132","I74.800x005","I70.000x012","I21.900x001","I72.200","I34.800x003","S65.100x002","Q20.802","I78.000","I70.100x002","D44.702","I73.903","T81.700x402","I77.000x011","I70.000x011","I70.200x004","E11.502+I79.2*","I89.100x003","I77.301","S25.201","I72.300x021","E11.700x022","I35.200x001","I37.000","I97.800x004","I70.900x004","I71.900x004","I38.x00x002","I36.801","I95.000","R96.001","I42.900","I22.000x005","Q24.505","I36.800x002","I47.106","I08.302","I72.000x321","I47.200x011","R00.100","I77.800x012","I74.300x123","I86.800x011","I24.900x001","R07.101","S09.000x001","I50.900x001","I70.810","I87.110","I77.014","E88.907+I43.1*","I74.800x007","I77.800x008","I72.200x003","I45.602","S35.204","Q24.602","Q25.303","Q27.817","I74.201","Q26.000x003","I49.300x005","I24.800x001","I80.802","I82.801","R57.801","B25.803+I41.1*","Q24.800x030","I25.800x005","I74.502","I80.104","T81.700x103","I77.807","I50.103","I42.800x001","I72.808","I72.302","E11.500x021+I79.2*","I33.007","S35.302","I72.900x002","Q24.901","Q24.800x012","S25.900","T82.807","I42.800x006","I49.302","T82.800x303","T82.800x004","I72.800x151","E10.700x022","Q24.800x026","I21.204","I71.000x025","I10.x06","Q21.203","I74.300x232","I87.100x008","I47.102","I22.800x004","I45.300","I49.501","I15.200x002","I21.302","I72.400x030","I74.500x013","I31.200x001","I08.300x007","I77.131","T81.700x102","I74.301","S26.000x002","Q24.300","I51.901","I82.803","S35.300x004","Q27.800x008","I72.000x022","R94.306","T81.700x004","I21.003","I48.100x002","I51.700","I77.600x013","S35.500x008","T82.800x302","I21.300x008","I22.000x001","I82.200x001","I74.300x112","Q27.306","I95.101","Q24.804","I49.403","I80.800x002","I49.800x016","R00.800x001","I77.600x001","S65.800","S95.900x001","I22.800x003","I21.200x015","I74.005","I09.900","D44.700x003","I08.000x005","I36.900","I72.002","I20.803","S25.300x001","I72.300","I48.900x003","I31.900x008","Q21.800","T82.901","I82.800x004","I45.502","T82.800x409","I77.800x009","T82.702","I77.100x032","I82.800x009","I70.911","I71.004","I24.002","S26.810","I77.201","I74.500x012","Q22.302","I24.000x004","T82.900x001","I49.001","T82.302","I97.800x013","Z45.001","I45.900x002","B33.200x004+I41.1*","S26.811","I47.109","I25.300x010","Q22.500","I30.100x005","S75.200x001","S75.200","D21.300x005","I45.900x003","A52.000x001+I52.0*","I44.201","S26.800x082","I21.900","Q26.200x002","E76.300x002+I52.8*","S65.501","T82.811","I73.902","I87.113","I77.103","S35.200x005","I48.000","R55.x00x005","S25.100x002","I08.304","D21.400x004","I72.400","Q24.811","I10.x00x016","S85.801","I71.101","I21.300x003","I38.x00x007","T82.100x015","I27.200x021","I49.800x002","I74.300x122","I74.200x001","I10.x00x008","T82.500x002","I74.300x131","I87.802","I42.800x002","I74.500x008","T82.800x207","I72.001","I82.800x003","I51.402","Q21.202","Q24.513","I30.103","I25.500","S75.000x003","Q24.803","S45.800","E85.408","I77.100x015","I74.300x111","I08.303","R07.400","D35.600x001","Q22.200","Q24.800x014","I31.903","T82.100x010","I70.208","D44.700x002","M05.305+I32.8*","A52.002+I79.1*","I73.001","I34.000","I71.200x011","S35.200x003","I74.500x010","I72.100","I21.200x025","R01.100","T82.800x402","I77.800x015","S75.800","I50.906","I70.200x062","I73.800x006","I36.800x004","I20.001","I02.900x001","I72.101","Q25.302","Q21.101","I21.105","I51.709","I80.001","T82.703","A18.809+I32.0*","T82.800x205","I73.100","I77.110","I77.900","I07.000x001","Q25.408","I34.803","I27.200x004","I70.900x002","I28.803","Q27.806","D48.712","I51.304","I71.000x022","I49.200x001","B57.201+I98.1*","A38.x00x002+I41.0*","B37.600+I39.8*","I34.102","Q21.106","I22.100x003","I71.401","S35.500x004","Q26.800x010","I09.801","I51.700x006","I80.202","I20.005","I70.912","I72.400x131","I73.800x008","I02.900x003","I25.902","I42.401","I31.800x001","I70.000x003","S55.100x001","T82.800x008","S25.200x001","I31.302","I82.203","I72.305","I34.202","I33.000x020","I77.800x011","I49.800x015","I21.000x005","A18.821+I41.0*","I35.804","I87.119","T82.000x001","T82.800x305","I70.000x006","Q24.800x027","I23.000x001","I87.100x009","I82.201","I70.211","I71.000x024","I74.300x510","I21.104","Q27.900","Q25.600","I48.300","Q20.600","I74.800x009","I72.800x121","I08.000x009","S35.000","D15.106","I28.000x002","I33.000x024","I77.100x028","T82.803","Q22.800x007","S25.801","I73.800x007","I31.100","A52.008+I32.0*","T82.806","I25.901","I25.300x013","E10.400x311+G99.0*","I47.104","T82.600x001","I77.800x022","I70.207","I24.000x003","I33.009","E74.008+I43.1*","S26.800x011","I71.204","A52.004+I39.1*","I42.902","D44.700","I21.207","Q24.504","I08.001","I77.800x006","I47.105","I70.900x006","S25.301","I40.000x006","I50.907","I80.302","I72.103","T81.700x303","I72.100x003","I83.905","R55.x00x004","I71.005","Q27.800x037","I51.706","T81.700x002","Q25.500","I72.000x011","A52.005+I52.0*","I21.200x016","T82.800x009","I25.800x010","I74.000x003","I37.200","I72.800x053","Z45.002","I25.000x001","M31.400","I22.800x007","S35.301","I45.800x002","I47.100x005","I72.003","B33.201+I41.1*","R57.200","R94.304","S75.700x002","I08.101","I70.800x006","S65.300","D21.400","I25.800x009","I86.807","I72.400x220","I21.106","I83.100x001","Q21.804","Q27.809","T82.100x002","I77.600x012","I71.200x014","I27.801","I74.300x213","Q27.300x009","I40.900","E10.700x023","T82.800x208","Q26.000x002","I74.504","I89.001","Q25.407","I95.800x001","I70.003","I47.200x009","I21.300x004","D44.703","I80.201","I72.400x330","J10.802+I41.1*","B33.200","I97.800x009","I71.903","I27.200x019","S26.800x031","I22.800x015","T82.002","I74.302","I21.200x018","I24.000x010","I70.011","I21.200x019","I22.800x002","I40.000x007","B58.800x001+I41.2*","I80.300x006","S35.500x002","I97.800x005","I74.800x010","I27.200x002","I36.800x003","I45.804","I08.003","Q27.815","S35.801","R01.200x003","I72.400x320","I82.900x003","Q21.805","I71.200x006","Q26.200x005","I74.004","I30.100x006","I51.500x006","I33.000x022","B26.803+I41.1*","T82.800x006","I30.102","I34.001","I71.000x013","I22.100x002","R00.300","T82.501","I22.000x003","I40.000x004","I77.005","I47.200x007","I51.900x002","Q24.000x002","Q24.809","I12.902","I21.200x022","I50.900x009","I70.213","S45.201","I07.800","R93.100x002","I71.600x001","Q24.600x002","E16.800x101","S35.501","I49.303","I77.600x004","S55.200x001","I20.002","E14.700x022","I50.001","I80.303","S35.500x003","I51.707","Q21.900","Z52.700","I47.200x014","I50.101","I20.800x006","Q27.309","S25.501","I80.102","E74.006+K77.8*","T82.100x012","I10.x00x007","I50.104","I70.804","Q27.808","Q23.804","Q24.400x003","T81.800x010","I25.800x003","I44.304","I08.300x003","T82.800x101","S35.900x001","S95.000","I11.002","I51.100x001","I71.100","I74.002","R55.x00x002","R96.000x001","I28.800x008","I72.812","I25.300x008","I30.900","Q25.700x012","I74.503","R00.100x001","I31.901","I38.x00x005","I21.303","T81.700x308","I08.100x001","I28.801","I70.900x003","I71.001","T82.809","I72.301","S85.900x001","S65.200","I08.300x001","I22.800x013","I51.800x005","Q23.800x004","C79.800x830","I08.000","I70.200x064","I47.101","I25.800x012","I74.001","I08.200x001","I31.800x003","I36.200","T82.800x202","I77.104","I82.900x002","I28.900x001","I47.100","Q26.500x001","I72.300x013","I87.001","I08.201","I82.300x001","R03.001","I36.100","I30.100x007","I77.100x018","S35.401","Q24.800x011","I67.203","I25.103","I71.402","T82.800x410","I42.001","M32.104+I43.8*","I97.800x014","C38.000x004","D18.000x841","I47.103","I72.100x007","S85.100x002","I87.115","I51.400","I70.000x010","D15.100","I74.305","Q22.100","I87.000","E10.502+I79.2*","I72.000","I87.116","I71.900x002","I44.102","I70.812","Q20.600x001","I74.300x320","R57.802","I42.200x002","I97.800x017","R55.x02","I95.900","I47.100x013","I40.800x001","Z45.003","Q20.500","I71.007","A36.802+I41.0*","I50.900x008","S35.300x001","I83.904","Q20.302","Q25.400x009","I21.200x023","T82.800x408","I08.000x001","R55.x00x008","Q26.300","Q24.808","C38.000","I25.104","T82.800x102","R94.300x003","M32.109+I39.8*","I33.003","I51.500x002","I22.000x002","I07.100x001","I70.900x007","T82.804","I42.100","Q21.100x001","I77.008","D18.000x835","S75.000","I83.000","R55.x00x006","I72.900","I08.000x010","I87.106","S35.201","I15.102","I24.901","I72.400x520","Q22.800x005","Q24.506","I31.900x009","I34.900","I97.000","S45.301","Q28.200x008","I25.102","T82.800x204","T82.800x404","I49.800x001","I87.114","I77.111","I51.303","I22.100x001","I45.000","R57.101","I20.808","Q20.500x001","Q24.814","I74.300x121","I38.x02","I74.807","Q27.800x033","I44.200","I09.900x002","T82.805","I02.000x001","I77.115","I74.500x002","I78.801","S25.802","I74.801","I48.100x003","Q20.200","T82.801","I77.600x016","I71.000x008","R57.800x003","Q24.800x025","I34.000x001","I89.007","Z03.500x001","I73.803","I42.201","I71.800","C79.800x807","Q23.805","I74.101","S35.202","Q27.303","I46.100x001","T81.700x202","S75.901","I21.200x029","S75.900x002","I50.102","I74.500x007","I71.902","I35.805","Q22.400","I50.000","I21.401","I77.600x014","S35.200x006","M31.804","Q20.601","I97.001","I72.806","R00.000","Q26.800x001","I71.203","I47.900","R55.x00x014","I27.200x005","I35.802","R00.801","Q20.200x002","I34.802","I51.800x004","I80.800x007","I50.900x019","I86.800x015","I74.300x132","I31.100x001","I80.901","I07.200x001","S25.400","I33.004","R00.200","Q26.100","S35.700x003","I42.300","I33.000x008","Q25.700x006","T82.303","Q87.809","I45.600x003","S85.102","I22.800x005","S55.101","I72.400x133","I15.100x001","S35.700x004","I77.107","I70.014","I34.800x005","Q21.000","I80.300x005","I86.816","I70.000x013","Q20.400","I01.100","R94.300x011","I71.000x012","Q26.200x001","D86.800x005+I41.8*","E10.700x011","I33.000x011","S35.400x002","I23.300x001","S25.800x003","R55.x00x003","I74.300x430","I45.500x002","I70.219","T82.300","I25.300x009","I50.100x006","I51.700x007","I35.000x003","Q22.900","S35.300x003","Q26.000x001","Q26.801","I72.901","I35.806","I70.110","S45.000","S45.001","I42.904","I71.000x029","I33.000x021","I77.012","T82.504","I70.214","I45.501","C38.002","I45.601","I80.100x003","I13.200x001","I21.200x011","I77.100x005","I74.500x009","I74.902","J10.800x003+I41.1*","T81.700x304","E14.500x032+I43.8*","R57.900x002","I30.900x001","I77.108","I47.200x005","I10.x03","I22.800x017","I80.208","I71.205","I21.213","I22.800x011","C79.800x819","I22.800x018","Q26.800x007","I72.300x012","I33.000x006","Q23.901","I74.806","Q25.404","I33.000x001","I27.200x017","I83.102","S35.400x001","S95.700x001","I27.900","A52.000+I98.0*","Q21.802","T81.700x404","I10.x02","I77.006","I51.200x001","S75.000x002","I77.100x014","I72.400x111","I71.202","Q24.512","I97.100x004","R00.800x003","I44.101","I71.901","I40.001","I33.001","I42.802","Q24.805","Q24.000x003","Q23.100","I20.802","T82.800x401","I47.201","I71.000x004","I50.100","Q21.205","I25.400x005","I31.300","I70.102","D48.100x008","R94.300x010","I77.102","T82.500x001","Q21.300x003","I70.200x061","I74.003","I47.200x003","I21.200x010","M32.105+I32.8*","I27.000x007","I87.104","I74.800x012","I15.800x001","I15.200x003","I73.901","C75.400","I74.308","I70.200x011","A39.501+I32.0*","I10.x00x002","I45.101","I71.201","I77.105","I42.501","I31.000","I70.802","I82.302","Q20.900","S75.100x002","S26.800x083","T82.000","I77.800x019","T82.800x206","R07.301","T82.100x009","I45.800x004","Q26.302","Q21.200","I74.200x007","Q21.102","I28.100","I36.000","T82.800x103","Q82.800x015","I51.001","I70.000x005","I51.700x004","T82.100x013","S45.700x001","I70.805","I07.000","I25.302","I72.405","I49.101","I74.307","I21.208","I72.400x213","T82.503","I06.200","I49.002","Q27.301","A32.802+I39.8*","I51.600x003","I97.800x010","T82.800x104","I21.300x005","I09.100x002","I08.100x004","I82.301","I74.300x222","S65.900x001","I51.700x003","I01.200","I72.400x122","Q25.405","I87.202","I10.x10","I77.600","T82.101","Q27.800x007","I08.100x005","I97.800x002","I86.802","I71.000x026","Z45.800x006","I31.900x010","S85.500","T82.100x003","I72.800x093","T82.201","I31.300x005","I72.300x031","Q24.900","I72.400x410","S75.900x001","I08.305","R94.305","I42.905","T11.400","I27.000x010","Q20.300","I71.000x011","I13.900x001","I05.200","S35.701","I10.x08","I47.202","T82.000x002","I45.401","T82.202","I70.002","I25.301","I77.007","S25.500","Q25.400x013","S65.700x001","I73.805","Q23.200x002","I22.800x008","I10.x12","I40.800x003","I70.004","R55.x00x013","I72.600","I51.700x015","I42.803","Q24.815","I21.200x014","Q20.000","I15.800x003","I71.000x023","I38.x03","T82.808","I97.800x016","I35.801","I70.206","I34.201","I21.200x017","I07.900","I47.111","I10.x05","I33.000x019","A52.006+I39.8*","I20.000x005","I28.800x003","I74.006","Q24.812","I86.813","S25.000","T80.000","I22.800x009","I86.801","I45.801","I21.212","M10.004+I43.8*","T82.401","S35.200x007","T82.100x006","T82.800x306","I51.302","I24.000x005","I77.801","I01.900","R93.102","D18.000x836","I77.202","I72.300x032","I28.000x003","I25.800x002","R94.300x012","I77.605","Q24.501","Q24.810","I42.901","S26.900","I35.800x003","R00.001","I35.807","I74.304","I77.109","I77.000x014","Q24.800x010","R55.x00x010","I95.100","I83.902","I72.800x061","I70.210","I23.500x001","I35.803","I51.502","I71.100x002","I33.008","I51.802","B57.202+I41.2*","Q24.806","I22.800x012","I87.102","D18.000x822","T82.100x014","I06.900","I51.900","I20.801","E14.500x031+I43.8*","I82.202","Q25.000","T81.700x201","T82.800x001","I31.000x002","I25.800x004","I51.600x002","I01.000","I74.800x008","I74.802","I97.000x002","I21.002","S15.700x001","D15.101","I09.200","I77.011","Q21.300x001","T82.903","I09.200x003","I15.900","I22.000x004","I71.000x028","A52.000x011+I39.0*","I33.000x012","T79.100","Q22.102","I70.204","I87.103","I35.100x003","R07.200","S35.200x001","T80.100","S45.200x002","Q21.100","I97.800x015","I73.800x001","I71.000x005","I74.300x220","S85.200","S85.700x001","I22.900x001","I77.000x008","I24.801","I70.101","S35.203","I15.101","I71.000x002","S26.000x001","I34.800x002","I82.100x001","Q23.001","Q20.300x002","Q24.508","I72.400x223","Q28.801","I77.106","S26.910","T81.700x203","I77.113","S55.900x001","I51.900x003","I74.300x410","I24.800x004","I45.901","I74.401","R94.301","I06.100","I74.300x310","I27.201","I97.101","I72.401","I86.804","I51.401","I08.200x002","I97.800x011","I83.101","Q24.100","E13.500x541+I79.2*","I77.602","I72.000x032","Q27.100","T82.103","I33.002","I77.300x002","R57.000","I23.800x001","I27.200x013","I42.500x001","T82.904","I08.000x004","I80.800","R01.000","I77.100x027","I86.815","S85.101","I71.000x017","I82.204","Z45.006","I48.401","I71.006","I77.100x012","I11.901","I95.200","I06.000","I22.800x006","I45.500x004","I24.000x009","Q27.811","I25.802","I77.010","Q27.800x035","Q22.800x004","I44.500","M05.306+I41.8*","T81.701","I77.800x020","Q26.800x002","I25.400x001","I77.100x004","Q21.105","I70.200x063","I77.120","S35.100","I49.800x005","T82.704","S35.700x001","A39.502+I39.8*"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCF入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=FB1_group(record)){
        return result;
    }

    if (result=FB2_group(record)){
        return result;
    }

    if (result=FC1_group(record)){
        return result;
    }

    if (result=FD1_group(record)){
        return result;
    }

    if (result=FD2_group(record)){
        return result;
    }

    if (result=FD3_group(record)){
        return result;
    }

    if (result=FE1_group(record)){
        return result;
    }

    if (result=FE2_group(record)){
        return result;
    }

    if (result=FF2_group(record)){
        return result;
    }

    if (result=FF1_group(record)){
        return result;
    }

    if (result=FF3_group(record)){
        return result;
    }

    if (result=FJ1_group(record)){
        return result;
    }

    if (result=FK1_group(record)){
        return result;
    }

    if (result=FK2_group(record)){
        return result;
    }

    if (result=FK3_group(record)){
        return result;
    }

    if (result=FL1_group(record)){
        return result;
    }

    if (result=FL2_group(record)){
        return result;
    }

    if (result=FL3_group(record)){
        return result;
    }

    if (result=FM1_group(record)){
        return result;
    }

    if (result=FM2_group(record)){
        return result;
    }

    if (result=FM3_group(record)){
        return result;
    }

    if (result=FM4_group(record)){
        return result;
    }

    if (result=FN1_group(record)){
        return result;
    }

    if (result=FN2_group(record)){
        return result;
    }

    if (result=FP1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合FQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'FQY';
    }

    if (result=FR1_group(record)){
        return result;
    }

    if (result=FR2_group(record)){
        return result;
    }

    if (result=FR3_group(record)){
        return result;
    }

    if (result=FR4_group(record)){
        return result;
    }

    if (result=FT1_group(record)){
        return result;
    }

    if (result=FT2_group(record)){
        return result;
    }

    if (result=FT3_group(record)){
        return result;
    }

    if (result=FT4_group(record)){
        return result;
    }

    if (result=FU1_group(record)){
        return result;
    }

    if (result=FU2_group(record)){
        return result;
    }

    if (result=FV1_group(record)){
        return result;
    }

    if (result=FV2_group(record)){
        return result;
    }

    if (result=FV3_group(record)){
        return result;
    }

    if (result=FW1_group(record)){
        return result;
    }

    if (result=FW2_group(record)){
        return result;
    }

    if (result=FZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}
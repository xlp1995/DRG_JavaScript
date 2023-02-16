import {putMessage,intersect,SS_VALID} from '../Base.js'
import GB1_group from '../ADRG/GB1.js';
import GB2_group from '../ADRG/GB2.js';
import GC1_group from '../ADRG/GC1.js';
import GC2_group from '../ADRG/GC2.js';
import GD1_group from '../ADRG/GD1.js';
import GD2_group from '../ADRG/GD2.js';
import GE1_group from '../ADRG/GE1.js';
import GE2_group from '../ADRG/GE2.js';
import GF1_group from '../ADRG/GF1.js';
import GF2_group from '../ADRG/GF2.js';
import GG1_group from '../ADRG/GG1.js';
import GJ1_group from '../ADRG/GJ1.js';
import GK1_group from '../ADRG/GK1.js';
import GK2_group from '../ADRG/GK2.js';
import GK3_group from '../ADRG/GK3.js';
import GR1_group from '../ADRG/GR1.js';
import GS1_group from '../ADRG/GS1.js';
import GT1_group from '../ADRG/GT1.js';
import GU1_group from '../ADRG/GU1.js';
import GU2_group from '../ADRG/GU2.js';
import GV1_group from '../ADRG/GV1.js';
import GW1_group from '../ADRG/GW1.js';
import GZ1_group from '../ADRG/GZ1.js';

export default function MDCG_group(record){
    let mdc_zd=["K65.010","K51.303","K31.815","K52.200x004","K92.800x004","Q42.000x101","K92.204","A03.903","K63.802","A05.800","C18.400","A03.900x002","K28.600","Q43.810","T28.600","K63.307","K26.100","C77.106","K61.200","D17.500x003","C17.900x002","Q42.200x904","K55.002","K31.101","Q43.106","Q39.803","K27.400x001","K31.800x806","Q43.001","K63.105","K55.102","K46.905","S36.811","C19.x01","K46.100","K25.000x002","K40.001","K29.500","Q43.812","C17.300","K22.208","K59.900x002","K31.703","A09.900x003","K57.002","K66.806","K45.805","K63.102","Q43.802","T28.100","K31.501","K61.002","K56.401","K46.902","Q43.402","A03.900x005","K91.810","C21.800","K41.300x002","K66.000x007","K90.000x001","K92.100x001","K64.808","K50.103","K63.817","Q42.903","K62.806","K92.800x001","Q43.800x014","K26.300","K52.909","T18.300x003","A07.000","K56.600x001","K40.309","C78.500x008","C16.002","Q41.901","K91.800x102","Q89.301","D20.102","K63.203","Q39.501","A08.300","C78.800x014","C15.400","E10.400x330+G99.0*","Q43.105","K58.800","K29.606","R14.x00x001","Q42.000x501","C16.903","K52.914","K63.812","K50.002","A07.900x001","K91.831","K42.900","C16.800x002","C16.803","K40.101","K57.102","T18.200","S36.413","Q42.000x201","B49.x12","K63.503","K63.212","K28.401","Q41.003","K22.401","C15.800x002","K65.009","K28.500","K30.x00x001","K27.600","Q43.800x015","K51.301","K90.802+M14.8*","K56.700","K55.101","K52.802","Q42.901","D37.405","K63.500x084","D37.102","K40.313","K57.302","S36.801","K22.803","J11.800x002","K27.300","K31.809","K64.400","A09.902","K40.900x004","K91.824","K61.100","K55.800x004","K62.300x003","K91.201","K45.807","K64.000","D12.301","K51.800x001","Q45.300x104","A04.902","I72.801","Q79.201","K63.201","K66.809","K63.101","K91.836","Q79.301","K41.301","K65.906","K31.607","K29.101","D48.400x002","K62.200x001","K91.300x002","K62.820","B37.805","K26.200x002","K63.807","K62.301","S36.910","K51.500","D17.700x017","D12.901","K55.004","K31.800x802","K62.100x002","C18.100","K59.401","A18.300x013+K93.0*","K52.202","D18.000x045","Q42.800x002","K31.100x002","D36.708","C17.800","K63.301","K29.600x006","K40.315","C16.200","E11.400x330+G99.0*","K62.402","A05.200","K91.834","K31.818","D12.900x001","K40.100x001","D12.603","Q45.300x103","K31.600x004","K46.900x012","D17.702","K57.300x006","A04.500","K46.900x003","D18.000x043","K22.800x003","D01.402","D01.405","K66.812","D01.403","K56.602","C48.105","K62.819","E14.400x340+G99.0*","Q41.102","K43.902","Q43.201","K31.500","K31.602","K26.001","S36.803","K66.102","K29.400","D12.200","K58.200","A18.812+K93.8*","Q43.000","K29.604","K40.900x001","K26.900x002","D37.409","Q41.800","Q39.400","Q39.900","A00.900","K63.801","A05.300x001","K46.000","D17.500x004","K42.901","S36.402","K91.401","K57.105","K63.810","D17.500x007","K55.000x011","K40.900x006","A00.000x001","E16.400","K56.500x003","C16.800x003","I88.105","C21.000","Q40.100","A18.807+K23.0*","K62.805","K26.200x001","S36.511","D12.400","K59.200x002","K50.900","K65.012","D37.200x002","A03.100x001","K56.501","K51.001","K57.800","K22.900x001","C19.x00","C48.100","K29.001","R19.100x002","K65.905","S36.414","S39.909","D37.200x003","K25.501","E14.400x330+G99.0*","K31.806","K52.102","C77.208","K62.300","B66.501","Q43.200","K62.815","K20.x02","I85.900x001","D37.404","K62.813","D12.302","D37.204","C48.000","K90.200","S36.812","Q43.800x012","A09.004","K22.207","K66.800","K65.901","S11.202","K90.001","K31.800x801","A18.307+K93.0*","C78.505","B46.200x001+K93.8*","K22.809","K22.700x001","K60.400","K29.701","E10.400x340+G99.0*","K52.000x001","K64.300","T28.200x002","C16.402","S36.700","K60.100","K64.501","K55.007","D12.100","Q39.000x001","Q39.800x201","C78.602","K52.902","K26.401","D01.000","K57.107","K61.001","A08.200","Q40.202","K56.400x003","R93.303","B82.900","Q39.100x011","I72.807","Q41.104","K31.701","K41.100x001","K63.308","D48.401","Q85.913","K43.603","I72.800x063","Q79.500","K91.404","S36.901","I88.001","C45.705","C18.600","K26.600","A18.314+K67.3*","A04.803","K91.818","K55.100x006","K27.902","A03.902","D01.300x001","K29.200","Q42.202","A49.809","A08.500","C78.800x005","K29.603","K91.835","K21.001","S36.501","K44.901","K55.104","K21.901","K35.301","K57.303","Q41.903","D37.103","A18.300x009+K93.0*","K22.815","K66.200","K56.603","K63.304","K63.215","A05.000","D37.300x001","K31.604","T18.502","D18.000x859","C16.401","K22.300","K52.000","K92.200x001","K55.100x008","D13.303","K27.503","K22.813","D12.700","Q42.902","K64.401","K66.800x009","K27.100x001","K52.800x003","K63.501","K90.000","D37.100x002","A09.000x001","C78.601","K61.101","K20.x00x001","K59.400x002","C15.100x003","K45.100","K59.800x005","K41.300x003","K90.900x002","K62.800x005","B87.800x002+K93.8*","K91.102","C78.603","K56.400x001","C78.800x013","K62.800x001","R85.300","A03.900x008","K31.502","K31.819","C21.101","K66.004","A18.306+K93.0*","K56.100","Q43.300x901","E84.102","C77.200x001","K41.000","K65.900","D37.503","A08.101","K56.102","C77.207","T28.702","K91.820","K91.800x601","K56.203","I86.401","K63.200x008","Q43.805","K91.402","Q42.200x905","K31.608","Q43.601","K46.001","I86.400x002","R19.500x002","K43.700","K56.601","R10.401","Q43.800x017","K51.901","C78.503","K91.800x106","C78.800x010","K28.900x001","K31.603","K52.907","D48.117","K90.901","K56.600x005","K59.200x003","D37.400x001","K92.800x007","K31.820","K52.903","K55.008","A04.400x004","K66.802","K62.501","K63.209","K27.500x001","D37.708","K40.302","K38.801","D36.707","D48.402","K65.011","C78.500x006","K55.900","K50.101","K31.802","Q45.300x105","C16.804","C20.x01","K65.806","D37.900x001","K91.828","D01.301","K62.903","K52.104","K25.000","A04.802","C45.700x005","K25.000x001","K31.000","I72.800x131","K26.501","K27.500","A18.300x006+K67.3*","K22.805","D37.500x002","A18.317","C78.500x004","K65.000","R10.102","C15.802","I85.000x001","K43.601","K60.500","A05.300","K62.801","I74.800x011","D17.700x027","C18.900","D17.500x009","C78.400","K40.900x005","A09.904","K38.300","K65.006","A60.102+K93.8*","K91.832","A04.800x006","K44.100x001","K46.900x002","R85.500","I85.901","K25.700","R85.000","K45.804","K28.600x001","K56.200x003","S36.400","A05.200x002","K40.901","S36.403","D18.000x825","C78.401","R85.100","Q42.200x902","A04.800x003","K64.811","T18.400","K62.401","K31.104","K29.100x001","K22.202","Q39.100","Q43.100","T18.300","K21.900x003","T18.500x004","K60.302","R14.x00x003","Q85.900x036","K22.814","K92.206","K64.809","K31.902","Q40.204","C26.800x002","K55.800x003","K20.x01","Q41.103","K63.900x003","K40.402","K92.203","C18.901","K66.103","D48.301","C21.801","I89.803","A09.900x004","K55.100x001","Q39.800x905","K91.833","R85.200","K40.900x003","D12.001","K90.002","K91.805","Q40.900","K66.808","Q40.000","D37.502","K60.200","K55.000x005","K22.812","K51.900","K50.000","K27.401","A04.600x001","S36.500x031","D13.301","C18.900x001","K25.900x001","C16.900x003","K40.314","K36.x02","K62.400x003","K22.100","K40.301","S36.301","K64.100","K62.814","C15.300","K92.207","R19.500x004","A00.900x005","K91.802","K29.600x007","D48.121","K66.001","K31.816","K64.901","K60.000","K92.205","K27.500x002","K22.600x001","Q39.801","D18.100x001","K91.815","Q40.203","K91.814","K46.000x002","S36.611","I86.800x022","K63.500","C15.800x004","K66.803","Q41.203","K29.700","K91.800x007","K31.400","K90.403","K62.600x002","K91.830","K65.903","K63.207","K31.605","K25.100x001","K27.502","K62.803","R10.402","K52.904","K60.403","R19.501","K40.400x001","K46.900","K62.821","K29.601","K66.807","D12.601","K59.801","Q89.300x001","A18.309","Q42.200x901","C17.900","I86.812","C15.100x004","K62.804","B49.x00x002","D48.400x003","K64.402","K65.800x002","K57.400","I89.800x006","R10.000x004","A54.807+K67.1*","C15.900","C18.200","A03.900x009","Q42.000x401","K65.014","D18.000x801","T80.200x001","K25.901","C48.104","Q43.806","D37.201","K55.011","E85.417+K93.8*","K63.202","K29.000","K22.201","S36.813","K55.105","K40.312","K40.102","D01.401","K56.202","K52.001","I72.816","K36.x00x004","K64.802","K60.301","K42.902","K50.102","K35.800x001","K40.204","K63.200","K63.216","A04.701","K22.601","K57.304","K28.100","Q40.209","K60.303","A05.900","K40.906","K65.000x014","K40.305","K37.x00","D37.207","K63.814","Q79.300","K63.302","K90.100x003","A18.302+K93.0*","K29.800","I86.400x004","K31.600x005","A04.401","K22.102","K52.103","K65.902","Q43.101","K43.500","S36.400x091","R85.700","B37.804","K44.900x001","K62.822","A18.310","K55.000x015","D48.129","K52.911","K55.300","A09.000x006","Q44.500x008","C78.809","R10.400x004","K62.000","K62.201","Q45.801","A07.300x002","K40.310","K51.902","K40.903","R85.600","K62.400x002","D12.000x002","K63.001","K62.700","K29.600","Q41.001","K63.902","C15.900x003","D37.400x002","C45.101","K25.600","K91.801","R58.x01","E11.406+G99.0*","K62.800x010","K63.401","K38.800x004","K50.000x001","Q40.300","D18.000x838","K90.400","C45.102","D37.702","A09.000x003","K57.103","Q40.208","K58.300","K40.300","K26.400x003","C16.000x004","K65.802","Q41.902","K65.004","S36.600x003","S36.300","S36.802","Q43.901","Q43.200x003","K38.000","K40.902","K51.300","Q43.800x008","K27.900x001","S36.701","A18.313+K93.0*","K26.701","K91.811","K55.200x013","K59.301","D37.901","D37.206","S36.400x095","K45.000","A03.904","Q85.906","A07.800x002","K91.800x103","Q45.900","K64.803","K43.900","K63.500x002","K91.804","K52.101","K52.919","K22.811","K31.300","K46.901","A07.100","D37.411","K62.810","K64.804","S36.810","K27.000","Q40.200x004","C78.403","T28.700x002","Q39.602","K55.100","K43.602","K27.500x005","C48.103","C15.800x001","K91.302","Q43.809","A04.801","Q40.205","S36.601","K91.800x602","D01.100","K92.000","R15.x00","K50.801","M32.112+K93.8*","K63.306","K92.202","D36.901","K22.807","K59.002","K92.200x005","A08.400x003","D37.203","K91.408","C16.800","K59.003","K91.305","A18.304+K93.0*","K55.801","R10.101","K41.400x001","K22.101","K66.008","K46.903","Q43.900","C16.100","A08.301","I88.000x003","A18.308","K38.000x002","K55.013","K22.804","K90.200x001","C26.800x003","K22.808","C79.800x834","I78.802","B37.806","K31.601","I86.400","K65.005","D20.100","K22.204","K22.806","D13.902","C16.500","K31.800x808","K25.401","D37.301","S36.500x092","K63.103","Q42.802","K31.811","K57.900","A03.300x001","K52.803","K56.700x003","K40.000x001","S36.412","K31.810","A18.300x016","K31.813","K31.821","Q40.207","Q43.102","K52.201","K90.405","K61.000","S36.500x011","K92.210","S36.411","K62.816","K20.x03","S36.500x041","D37.709","K22.400x003","C26.901","D18.012","K31.801","K26.500x001","K38.802","K46.002","A00.100x001","K65.001","K25.400x002","K38.100","K40.303","A08.401","K56.604","K51.401","K92.800x002","K63.900x005","K62.807","Q42.800x003","K29.900","K91.813","K91.100x001","C45.703","K43.301","K57.003","M34.800x006+K23.8*","K56.701","K27.600x001","K22.802","K57.106","R85.400","S36.500x091","R19.600","K57.305","E10.400x350+G99.0*","K92.800x003","K91.829","C16.600","K64.200","K22.103","K55.003","A03.800x001","K35.200","K31.812","K65.804","K40.201","K63.210","A09.001","Q42.200x903","K91.100","K59.400","Q43.404","K31.901","A03.900x007","C17.000","K91.406","Q40.800","K45.002","D20.000","K59.302","K65.805","Q43.811","K57.001","A04.600","Q85.900x002","S36.814","C17.200","K43.604","K62.100","K91.816","K43.302","K29.700x002","A03.901","K51.202","K31.200","K59.900x001","K31.609","K36.x00x003","S36.900","K28.400x002","E11.400x340+G99.0*","K29.801","C21.100","A18.800x014+K23.0*","K52.918","C77.201","K31.702","K63.805","K65.003","K65.008","K66.006","K62.818","Q40.200x010","R10.301","A00.900x003","K65.015","K62.800x009","D37.200x001","K21.902","K91.301","K43.304","K27.400x002","K55.103","A09.002","K91.202","Q39.300","K22.301","K51.200x001","C15.500","K55.100x005","D37.700x007","K43.004","K62.812","K55.902","D12.000","K91.800x117","C16.301","C16.802","D13.900x003","Q39.600","A08.100x001","K40.904","A03.200x001","K90.300x001","D48.713","K52.917","K42.000x001","K91.103","C26.000","B37.800x091","K63.303","Q41.202","K57.000","D36.700x019","D00.100","C16.902","Q43.800x006","A08.000","C16.400","A05.202","Q79.400","S36.405","K55.200","Q39.601","K50.800","K28.700","R14.x00x006","A07.801","K46.900x004","Q43.300x201","K31.814","K52.801","S36.600","K66.000","K66.007","K25.001","K91.800x702","K55.106","K64.500","I89.005","K63.107","R19.200","D37.707","K57.108","K63.305","K52.203","K64.807","R19.100","K58.801","K30.x00","D37.701","Q43.004","E16.400x003","C76.200","R93.300x001","A18.300x014+K93.0*","K57.800x001","D17.500x005","C15.801","K28.900x002","Q39.200x011","C18.802","K91.837","K91.839","K62.800x012","K28.200","B77.000x001+K93.8*","E10.400x370+G99.0*","K90.100x001","K66.810","K66.805","C18.803","K63.815","A18.303+K93.0*","A03.800x002","K55.901","K56.201","K31.100","K62.202","K27.501","K63.400","D48.403","K92.208","E16.401","K90.400x003","R19.100x001","D48.700x004","C78.600x004","S30.102","K65.800x001","B49.x16","D12.800","K22.205","R14.x00x007","K45.801","C15.100","A07.200","K63.819","C45.100","K65.803","K92.800x011","A04.700x002","C15.000","K66.101","K38.900","K43.900x001","K66.901","K42.100x001","S36.310","R19.000x005","D37.700x002","C18.801","K66.800x008","Q51.702","C15.100x002","E73.000","I86.400x001","D36.700x014","K90.406","T18.900","A05.000x001","K58.100","Q85.902","K44.000x002","K63.108","K25.500x001","D37.501","R10.000","Q42.201","K65.013","K66.003","D20.101","I72.815","Q43.103","K43.200","A09.903","K66.201","C18.500","K27.900x005","D37.101","K55.000","K66.801","D13.101","D48.700x005","K55.300x001","A18.318","K57.401","K51.003","K91.800x116","K61.400","D13.200","C78.501","D37.402","K40.401","K38.800x001","Q89.302","A08.400","R19.200x002","S39.905","K57.104","D18.000x042","K52.901","K40.900x002","C26.800x001","D37.408","A18.305+K93.0*","K50.104","K22.200","C78.502","K31.103","K22.500","K31.903","D37.500x001","K40.306","Q43.401","C78.402","I72.802","A04.800x001","K63.809","K56.503","K37.x00x002","C48.200","D37.205","K43.605","D17.500x001","A05.400","C26.800","K62.400x004","K55.010","K63.208","D18.000x046","A04.100x001","K26.900x001","K35.201","A04.000x002","K63.901","K28.500x001","K91.900","K62.602","A09.900x007","Q45.300x102","R10.103","A04.702","D19.100","Q43.804","K66.100","K31.803","K64.810","I89.006","R19.500x003","Q43.807","A04.900","D00.200x003","K65.904","K63.813","K31.804","K50.000x005","K31.807","K29.602","K90.801","K56.000","K62.817","Q43.003","Q40.201","K52.910","K62.601","A09.003","K35.300","K65.807","C18.700","K63.100x001","D12.600","C48.201","K46.100x001","K64.805","A74.801+K67.0*","I89.801","Q41.101","K55.006","C26.900","D13.000","K40.202","K43.303","K55.201","I72.800x142","K62.901","D18.000x041","E11.400x350+G99.0*","K64.900","K57.900x001","Q43.200x002","R10.400x002","C78.801","A09.006","K52.300","D37.700x001","K64.801","K51.201","R19.800x001","A18.311+K93.0*","K38.800x003","K91.303","D12.300","D01.200","K27.901","K63.403","D37.606","K27.400","K92.201","R93.300x004","Q40.003","R85.800","A18.300x015+K93.0*","C18.800x002","K62.500x001","K91.800x111","Q42.001","K60.300","K25.902","D37.401","K31.606","D00.200","K91.000","K91.809","A04.800x007","R93.500x001","K57.301","E14.400x350+G99.0*","T98.300x001","K40.203","K56.200x011","D17.500","K29.608","B77.001+K93.8*","C18.300","K57.202","K25.400x001","R12.x00","Q41.201","A05.400x001","K57.101","K56.600x008","D17.701","I89.800x019","A04.901","K41.200x001","Q43.602","K36.x01","K91.101","K51.000","A18.316+K93.0*","T18.801","K22.000x001","Q39.802","K59.100","S36.401","R19.400","A18.312+K93.0*","K21.903","M32.115+K67.8*","C45.700x002","K65.016","K91.808","C16.000","D37.710","D36.700x018","Q42.102","D01.900","K63.816","Q43.800x018","D13.304","K26.000","K63.205","K56.300","Q43.801","K62.808","K20.x00x006","K52.204","K91.405","K22.800x011","K45.802","R14.x00x002","K44.000x001","K64.806","C16.000x003","K63.900x001","Q43.700","K63.206","D17.500x008","Q43.808","K92.901","K27.900x002","K40.311","K52.912","C17.801","K59.303","C78.504","Q43.403","K59.000","K22.400","E73.800","K66.811","Q27.810","K57.500","K90.402","C20.x00","E14.400x370+G99.0*","D13.900","K31.905","Q43.800x009","Q42.301","Q43.104","K62.800x021","C15.800x003","K52.908","K63.214","C78.803","K63.211","K50.800x001","K62.802","A03.900","C18.001","K28.000","K41.900x001","K45.800","K55.202","D37.200x004","D48.714","K43.002","C17.100","K63.804","K22.209","K91.800x501","T18.301","Q42.801","C20.x00x003","K25.300x001","K59.101","K27.400x004","K63.806","K63.502","K61.300","K22.901","K91.800x412","K92.209","D37.607","K91.812","T28.701","A04.200x001","T18.100","K43.400","D37.406","K42.001","D18.000x040","K56.001","K92.800x005","D48.300x001","K63.204","K28.300x001","K90.404","K40.002","Q40.200x005","A05.100","K51.302","Q39.800x904","K40.905","A09.901","D13.100","K62.809","K55.000x010","K60.401","K91.842","A04.700","A09.007","D37.403","C78.802","D37.202","S36.500","K20.x00x003","K56.200","K65.017","D12.602","K56.101","C16.900","Q43.500","K27.700x001","K59.800x002","A04.300x001","K91.300","K55.012","Q40.206","A09.005","K55.009","K57.100x005","A18.315+K93.0*","C48.800","Q40.002","K38.200","C16.001","K65.002","K55.900x004","K22.203","K43.000","A08.402","C21.802","D17.700x022","Q79.200","S36.800x022","K66.005","Q89.300","K91.819","K59.200","B82.901","K51.203","Q43.301","K31.805","Q42.000x301","K65.801","D37.407","K25.903","C18.000","K31.808","S36.500x021","R19.300","K62.811","K60.400x003","A00.900x002","K91.803","K20.x00","A09.900x006","T28.200x001","K29.605","K28.901","S36.404","K29.501","C16.801","D12.500","K55.005","K90.100x002","K57.200x001","K63.000","K46.101","K62.800x017","K51.002","C76.304","K91.800x206","K91.200x002","E73.900","K62.200","Q43.800x019","A03.000x001","A07.300","Q42.002","K51.903","D09.700x002","Q42.803","S36.400x093","K22.801","K45.808","D37.410","K29.802","R12.x00x002","E16.402","K27.200","K55.001","Q39.800x903","Q79.501","K45.003","K63.803","C21.200","K31.102","K62.001","Q43.002","K40.200x001","C15.200","K63.104","D37.100x003","K91.817","K51.400","K40.304","K57.201","K91.821","K29.300","K52.804","K40.308","K63.900x002","A04.800x010","K43.001","I72.800x132","K50.001","K57.801","Q39.100x021","K63.504","K60.402","K45.806","K63.213","R93.300x003","K62.902","Q43.803","K90.401","D37.100x001","T18.501","A00.900x004","D01.404","K63.402","K22.206","K43.100","K63.818","D13.302","B82.000","C78.804","K43.003","K40.307","B49.x17","I77.400","Q41.002","K41.302","K31.904","K66.002","A52.710+K67.2*","S36.500x093","K40.907","Q42.101","K22.000x002","I86.800x014","C79.809","D00.200x002","Q42.302","K63.200x003","K25.200x001"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCG入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=GB1_group(record)){
        return result;
    }

    if (result=GB2_group(record)){
        return result;
    }

    if (result=GC1_group(record)){
        return result;
    }

    if (result=GC2_group(record)){
        return result;
    }

    if (result=GD1_group(record)){
        return result;
    }

    if (result=GD2_group(record)){
        return result;
    }

    if (result=GE1_group(record)){
        return result;
    }

    if (result=GE2_group(record)){
        return result;
    }

    if (result=GF1_group(record)){
        return result;
    }

    if (result=GF2_group(record)){
        return result;
    }

    if (result=GG1_group(record)){
        return result;
    }

    if (result=GJ1_group(record)){
        return result;
    }

    if (result=GK1_group(record)){
        return result;
    }

    if (result=GK2_group(record)){
        return result;
    }

    if (result=GK3_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合GQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'GQY';
    }

    if (result=GR1_group(record)){
        return result;
    }

    if (result=GS1_group(record)){
        return result;
    }

    if (result=GT1_group(record)){
        return result;
    }

    if (result=GU1_group(record)){
        return result;
    }

    if (result=GU2_group(record)){
        return result;
    }

    if (result=GV1_group(record)){
        return result;
    }

    if (result=GW1_group(record)){
        return result;
    }

    if (result=GZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}
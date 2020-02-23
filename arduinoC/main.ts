
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace SHT20_I2C_Water{
    //% block="SHT20_I2C_Water init " blockType="command" 
    export function SHT20_I2C_WaterInit(parameter: any, block: any) {
        Generator.addInclude("SHT20_I2C_WaterInit11", "#include <Wire.h>");
        Generator.addInclude("SHT20_I2C_WaterInit22", "#include <DFRobot_SHT20.h>");

        Generator.addObject(`SHT20_I2C_WaterDFRobot_SHT20`,  "DFRobot_SHT20",`sht20;`);

        Generator.addSetup("SHT20_I2C_Water1","Serial.begin(9600);");
        Generator.addSetup("SHT20_I2C_Water2","sht20.initSHT20();");
        Generator.addSetup("SHT20_I2C_Water3", "delay(100);");
        Generator.addSetup("SHT20_I2C_Water4" ,"sht20.checkSHT20();");

    }
    //% block="SHT20_I2C_Water read[SR]" blockType="reporter"  
    //% SR.shadow="dropdown"  SR.options="SR"
     export function SHT20_I2C_WaterRead(parameter: any, block: any) {
         let sr=parameter.SR.code;
        Generator.addCode([`sht20.${sr}()`,Generator.ORDER_UNARY_POSTFIX]);
  
    }
  
    
}

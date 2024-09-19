import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PieChart } from "../../Components/index";
import { Tab } from "../../Components/shared";
import ChartWithTable from "../../Components/ChartWithTable";
import {
  InventoryFGDemoData,
  InventoryPGDemoData,
  InventoryRowMetialDemoData,
} from "../../lib/DemoData/Inventory";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const InventoryPlantWisePage = () => {
  const { plantName } = useParams();
  const [inRMData, setInRMData] = useState([]);
  const [packagingMaterials, setPackagingMaterials] = useState([]);
  const [FG, setFG] = useState([]);

  const rowMatwrialGet = useCallback(() => {
    const InRM = InventoryRowMetialDemoData.filter(
      (it) =>
        it.plantName === (plantName === "P-GHZ" ? "PPPL GHZ" : plantName)
    ).reduce((acc, current) => {
      const existingIndex = acc.findIndex(
        (item) => item.materialType === current.materialType
      );
      if (existingIndex !== -1) {
        acc[existingIndex].erpWeight += current.erpWeight;
        acc[existingIndex].kantaWeight += current.kantaWeight;
        acc[existingIndex].netWeight += current.netWeight;
      } else {
        acc.push({
          materialType: current.materialType,
          netWeight: current.netWeight,
          erpWeight: current.erpWeight,
          kantaWeight: current.kantaWeight,
        });
      }
      return acc;
    }, []);
    setInRMData(InRM);
  }, [plantName]);

  const getPackagingMaterials = useCallback(() => {
    const InRM = InventoryPGDemoData.filter(
      (it) => it.plantName === (plantName === "P-GHZ" ? "PPPL GHZ" : plantName)
    ).reduce((acc, current) => {
      const existingIndex = acc.findIndex(
        (item) => item.materialType === current.materialType
      );
      if (existingIndex !== -1) {
        acc[existingIndex].erpWeight += current.erpWeight;
        acc[existingIndex].kantaWeight += current.kantaWeight;
        acc[existingIndex].netWeight += current.netWeight;
      } else {
        acc.push({
          materialType: current.materialType,
          netWeight: current.netWeight,
          erpWeight: current.erpWeight,
          kantaWeight: current.kantaWeight,
        });
      }
      return acc;
    }, []);
    setPackagingMaterials(InRM);
  }, [plantName]);

  const getFG = useCallback(() => {
    if (plantName === "P-GHZ" || plantName === "PPPL GHZ") {
      const InFG = InventoryFGDemoData.reduce((acc, current) => {
        const existingIndex = acc.findIndex(
          (item) => item.item === current.item
        );
        if (existingIndex !== -1) {
          acc[existingIndex].totalWeight += current.totalWeight;
        } else {
          acc.push({
            item: current.item,
            totalWeight: current.totalWeight,
          });
        }
        return acc;
      }, []);
      setFG(InFG);
    }
  }, [plantName]);

  useEffect(() => {
    rowMatwrialGet();
    getPackagingMaterials();
    getFG();
  }, [getFG, rowMatwrialGet, getPackagingMaterials]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={[]} />
      <ChartWithTable
        title="RAW MATERIAL"
        className="overflow-x-auto"
        header={[
          { title: "Material Type" },
          { title: "Net Weight" },
          { title: "ERP Weight", className: "hidden md:table-cell" },
          { title: "Kanta Weight", className: "hidden md:table-cell" },
        ]}
        body={inRMData}
        chart={
          <PieChart
            data={{
              labels: inRMData.map((it) => it.materialType),
              datasets: [
                {
                  label: "Net Weight",
                  data: inRMData.map((it) => it.netWeight),
                  backgroundColor: inRMData.map(getRandomColor),
                  borderColor: "transparent",
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        }
      />
      <br />
      <br />
      <ChartWithTable
        title="PACKAGING MATERIAL"
        className="overflow-x-auto"
        header={[
          { title: "Material Type" },
          { title: "Net Weight" },
          { title: "ERP Weight", className: "hidden md:table-cell" },
          { title: "Kanta Weight", className: "hidden md:table-cell" },
        ]}
        body={packagingMaterials}
        chart={
          <PieChart
            data={{
              labels: packagingMaterials.map((it) => it.materialType),
              datasets: [
                {
                  label: "Net Weight",
                  data: packagingMaterials.map((it) => it.netWeight),
                  backgroundColor: packagingMaterials.map(getRandomColor),
                  borderColor: "transparent",
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        }
      />
      <br />
      <br />
      <ChartWithTable
        title="FG INVENTORY"
        className="overflow-x-auto"
        header={[{ title: "Item" }, { title: "Total Weight" }]}
        body={FG}
        chart={
          <PieChart
            data={{
              labels: FG.map((it) => it.item),
              datasets: [
                {
                  label: "Total Weight",
                  data: FG.map((it) => it.totalWeight),
                  backgroundColor: FG.map(getRandomColor),
                  borderColor: "transparent",
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        }
      />
    </div>
  );
};

export default InventoryPlantWisePage;

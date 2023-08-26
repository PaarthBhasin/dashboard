import React, {useEffect, useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Toolbar } from '@syncfusion/ej2-react-grids';
import './Home.css'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';

const Home = () => {
  const [subprojects,setSubprojects] = useState([]);
  console.log({subprojects});
  useEffect(()=>{
    async function getAllSubproject(){
      try{
        await axios.get("http://127.0.0.1:8000/api/subproject").then((data) => {
     setSubprojects(data.data);
     })

      } catch (error) {
        console.log(error);
      }
    }
    getAllSubproject();
  },[]) 
  const clickhandler = (args) =>{
    console.log({subprojects});
    
  }
  const editing = { allowDeleting: true, allowEditing: true, allowAdding:true, mode:"Dialog" };
  const toolbarSettings=["Add","Delete","Update","Cancel"];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Ongoing Project" />
      <GridComponent
        id="gridcomp"
        dataSource={subprojects}
        allowFiltering
        allowSorting
        allowExcelExport
        allowPdfExport
        enableStickyHeader={true}
        contextMenuItems={contextMenuItems}
        toolbar={toolbarSettings}
        toolbarClick={clickhandler}
        editSettings={editing}
      >

        <ColumnsDirective isPrimaryKey={true}>
          {/* {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)} */}
          <ColumnDirective field='name' headerText='Project Name' width= '100' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='expected_start_date' headerText='Start Date' width= '100' textAlign='Left' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='expected_end_date' headerText='End Date' width= '100' textAlign= 'Left' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='description' headerText='Project Description' width= '200' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='priority' headerText='Priority' width='100' textAlign='Left' ></ColumnDirective>
          {/* <ColumnDirective field='id' headerText='ID' width= '100' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='name' headerText='Name' width= '100' textAlign='Left'></ColumnDirective> */}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Toolbar]} />
      </GridComponent> 
    </div>
  );
};
export default Home;

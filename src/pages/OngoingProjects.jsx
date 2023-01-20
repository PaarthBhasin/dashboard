import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Toolbar,CommandColumn } from '@syncfusion/ej2-react-grids';
import './Home.css'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const OngoingProjects = () => {
  const editing = { allowDeleting: true, allowEditing: true, allowAdding:true, mode:"Row" };
  const toolbarSettings = ['Search'];
  var filterType = ["menu"];
  const commands=[
    {
      buttonOption:{ cssClass:'e-flat', iconCss: 'e-edit e-icons'},
      type:'Edit',
    },
    {
      buttonOption:{ cssClass:'e-flat', iconCss: 'e-delete e-icons'},
      type:'Delete',
    },
    {
      buttonOption:{ cssClass:'e-flat', iconCss: 'e-update e-icons'},
      type:'Update',
    },
    {
      buttonOption:{ cssClass:'e-flat', iconCss: 'e-cancel-icon e-icons'},
      type:'Cancel',
    },
  ];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Ongoing Project" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowAdding
        allowFiltering
        allowSorting
        allowExcelExport
        allowPdfExport
        filterSettings={filterType}
        contextMenuItems={contextMenuItems}
        toolbar={toolbarSettings}
        editSettings={editing}
      >
        <ColumnsDirective isPrimaryKey={true}>
          {/* {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)} */}
          <ColumnDirective field='OrderItems' headerText='Project Name' width= '150' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='DepartmentName' headerText='Department Name' width='100' textAlign='Left' editType='dropdownedit'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width= '100' textAlign='Left' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width= '100' textAlign= 'Left' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='ProjectDesc' headerText='Project Description' width= '150' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='ProjectDesc' headerText='Manage Records' width= '150' commands={commands}textAlign='Left'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Toolbar,CommandColumn]} />
      </GridComponent>
    </div>
  );
};
export default OngoingProjects;
import DevExpress from 'devextreme/bundles/dx.all'

export namespace DxGrid {
	export interface CellTemplateInfo<T> extends DevExpress.ui.dxDataGridRowObject {
		data: T;
		column: DevExpress.ui.dxDataGridColumn;
	}
}
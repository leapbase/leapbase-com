import React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view';
import { TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePageData } from '../pages/PageContext';

export default function BasicTreeView(props) {
  const { data:pageData, loading:pageLoading, error:pageError } = usePageData();
  let items = props.config && props.config.items || [];
  
  const renderItem = (node) => {
    let childNodes = node.items || [];
    let output = <TreeItem key={node.id} itemId={node.id} label={node.label}>
        {childNodes.map( item => renderItem(item) )}
      </TreeItem>;
    return output;
  };
  
  return (
    <SimpleTreeView>
      { items.map( item => renderItem(item)) }
    </SimpleTreeView>
  );
}

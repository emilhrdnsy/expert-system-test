import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';

import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import InputRoundedIcon from '@material-ui/icons/InputRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});


export default function GmailTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Dashboard" labelIcon={DashboardRoundedIcon} color="#1a73e8" bgColor="#e8f0fe"/>
      <StyledTreeItem nodeId="2" labelText="Input" labelIcon={InputRoundedIcon} color="#1a73e8" bgColor="#e8f0fe">
        <StyledTreeItem
          nodeId="6"
          labelText="Input Gejala"
          labelIcon={SupervisorAccountRoundedIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Input Variabel Gejala"
          labelIcon={InfoIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Input Variable Ciri-ciri"
          labelIcon={ForumIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="9"
          labelText="Input Rule Penyakit"
          labelIcon={LocalOfferIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" labelText="Data Gejala" labelIcon={StorageRoundedIcon} color="#1a73e8" bgColor="#e8f0fe" />
      <StyledTreeItem nodeId="4" labelText="Proses" labelIcon={CachedRoundedIcon} color="#1a73e8" bgColor="#e8f0fe">
        <StyledTreeItem
          nodeId="10"
          labelText="Data User"
          labelIcon={SupervisorAccountRoundedIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="11"
          labelText="Hasil Diagnosa"
          labelIcon={InfoIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="5" labelText="Konsultasi" labelIcon={SupervisorAccountRoundedIcon} color="#1a73e8" bgColor="#e8f0fe" />
    </TreeView>
  );
}
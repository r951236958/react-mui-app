import React, { Component } from 'react'

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  ListSubheader,
  Paper,
  Divider,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'

export default function MyLink() {
  return (
    <Card variant="outlined">
      <List className="menulist">
        <ListSubheader>
          <span className="subheader">常用連結</span>
        </ListSubheader>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">g_translate</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
          >
            <ListItemText primary="Google翻譯" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">today</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
          >
            <ListItemText primary="日報" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">history_edu</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
          >
            <ListItemText primary="批注詞" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">calculate</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
          >
            <ListItemText primary="數據計算" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">filter_alt</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
          >
            <ListItemText primary="篩選總表" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">source</i>
          </ListItemIcon>
          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
          >
            <ListItemText primary="匯入處理" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">folder_shared</i>
          </ListItemIcon>

          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
          >
            <ListItemText primary="採購部共用" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="material-icons">folder_shared </i>
          </ListItemIcon>

          <Link
            color="textPrimary"
            href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
          >
            <ListItemText primary="Jayden共用" />
          </Link>
        </ListItem>
      </List>
    </Card>
  )
}

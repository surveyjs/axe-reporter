import React from 'react';
// import styles from './styles/rule-summary.module.css';
import styles from './styles/report.module.css';

export default function RuleSummary({ nodes = [] }) {
  return (
    <div className={styles.Container_24901_1291670}>
        <div className={styles.axe_rule_report_header}>
            <div className={styles.HeaderCell_1_24901_1291672}>
                <div className={styles.Container_24893_918952}>
                <div className={styles.Content_24893_918953}><span className={styles.Text_24893_918958}>#</span></div>
                <div className={styles.Sizer_24893_918959}>
                    <div className={styles.Nothing_24893_918960}></div>
                </div>
                </div>
            </div>
            <div className={styles.HeaderCell_2_24901_1291673}>
                <div className={styles.Container_24893_918952}>
                <div className={styles.Content_24893_918953}><span className={styles.Text_24893_918958}>Description</span></div>
                <div className={styles.Sizer_24893_918959}>
                    <div className={styles.Nothing_24893_918960}></div>
                </div>
                </div>
            </div>
            <div className={styles.HeaderCell_3_24901_1291674}>
                <div className={styles.Container_24893_918952}>
                <div className={styles.Content_24893_918953}><span className={styles.Text_24893_918958}>WCAG / Rule</span></div>
                <div className={styles.Sizer_24893_918959}>
                    <div className={styles.Nothing_24893_918960}></div>
                </div>
                </div>
            </div>
        </div>
        {nodes.map((node: any, index: number) =>
        <div className={styles.axe_rule_report_row}>
            <div className={styles.Cell_1_24901_1291679}>
                <div className={styles.Container_24893_919069}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{index+1}</span></div>
                <div className={styles.Sizer_24893_919076}>
                    <div className={styles.Nothing_24893_919077}></div>
                </div>
                </div>
            </div>
            <div className={styles.Cell_2_24901_1291680}>
                <div className={styles.Container_24893_919069}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>Element location:&#xA0;{node.target[0]}<br/>
                    Element source:&#xA0;{node.html}</span></div>
                <div className={styles.Sizer_24893_919076}>
                    <div className={styles.Nothing_24893_919077}></div>
                </div>
                </div>
            </div>
            <div className={styles.Cell_3_24901_1291681}>
                <div className={styles.Container_24893_919069}>
                <div className={styles.Content_24893_919070}><span className={styles.Text_24893_919075}>{node.failureSummary}<br/>
                    Related node:&#xA0;{node.target[0]}</span></div>
                <div className={styles.Sizer_24893_919076}>
                    <div className={styles.Nothing_24893_919077}></div>
                </div>
                </div>
            </div>
        </div>)}
    </div>
  );
};

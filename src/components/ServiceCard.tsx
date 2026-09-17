import { Card, CardHeader, Text } from '@fluentui/react-components';
import { DocumentRegular, PaintBrushRegular, WrenchRegular } from '@fluentui/react-icons';
import type { ReactElement } from 'react';

type Props = { title: string; promise: string; detail: string; icon: string };
const icons: Record<string, ReactElement> = { wrench: <WrenchRegular />, document: <DocumentRegular />, paint: <PaintBrushRegular /> };
export function ServiceCard({ title, promise, detail, icon }: Props) {
  return <Card className="service-card"><div className="service-media">{icons[icon]}</div><CardHeader header={<Text weight="semibold" size={500}>{title}</Text>} description={detail} /><p>{promise}</p></Card>;
}

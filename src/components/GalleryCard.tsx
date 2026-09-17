import { Badge, Card, CardFooter, CardPreview, Text } from '@fluentui/react-components';
import { ArrowUpRightRegular } from '@fluentui/react-icons';

type Props = { title: string; medium: string; badge: string; description: string; image: string };
export function GalleryCard({ title, medium, badge, description, image }: Props) {
  return <Card className="gallery-card"><CardPreview><img src={image} alt={`${title} project`} /></CardPreview><Badge appearance="tint">{badge}</Badge><Text weight="semibold" size={500}>{title}</Text><Text className="muted">{medium}</Text><p>{description}</p><CardFooter><ArrowUpRightRegular aria-hidden="true" /> Finished with a steady hand</CardFooter></Card>;
}

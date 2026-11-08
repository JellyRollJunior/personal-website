import { createTab, TAB_STYLE } from './createTab.js';
import { ImageCarousel } from '../../../common/components/ImageCarousel.jsx';
import { ProjectContent } from '../ProjectContent.jsx';

const createImagesTab = ({ id, title, images }) => {
    return createTab({
        id: id + '-images',
        title: title + ' - Images',
        tabStyle: TAB_STYLE.BORDERED,
        defaultPosition: { x: 50, y: 200 },
        Content: <ImageCarousel className={''} imageArray={images} />,
    });
};

const createDetailsTab = ({ id, title, description, repoLink, demoLink }) => {
    return createTab({
        id: id + '-details',
        title: title,
        tabStyle: TAB_STYLE.BORDERED,
        defaultPosition: { x: 50, y: 200 },
        Content: (
            <ProjectContent
                title={title}
                body={description}
                repoLink={repoLink}
                demoLink={demoLink}
            />
        ),
    });
};

export { createImagesTab, createDetailsTab };

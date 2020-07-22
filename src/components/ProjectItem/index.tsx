import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
import coverImage from '@/assets/images/project-cover.jpg';
import { Panel } from '../Panel';
import { Badge } from '../Badge';
import './styles.scss';

type ProjectItemProps = {
  category: string,
  dateStart: Date | string,
  dateEnd: Date | string,
  customer: string,
  title: string,
  lead: string,
  administrator: string,
};

function getStatus(start: Date | string, end: Date | string): string {
  const now = new Date();

  const castedStart = typeof start === 'string' ? new Date(start) : start;
  const castedEnd = typeof end === 'string' ? new Date(end) : end;

  if (now < castedStart) return 'Подготовка';
  if (now > castedEnd) return 'Завершен';

  return 'Строится';
}

function getDateSegment(dateStart: Date | string, dateEnd: Date | string): string {
  const castedStart = typeof dateStart === 'string' ? new Date(dateStart) : dateStart;
  const castedEnd = typeof dateEnd === 'string' ? new Date(dateEnd) : dateEnd;

  const start = castedStart ? castedStart.toLocaleDateString().replace(/\//g, '.') : '';
  const end = castedEnd ? castedEnd.toLocaleDateString().replace(/\//g, '.') : '';

  return `${start} –⁠ ${end}`;
}

export const ProjectItem: FC<ProjectItemProps> = ({
  category,
  dateStart,
  dateEnd,
  customer,
  title,
  lead,
  administrator,
}: ProjectItemProps) => (
  <Panel className="project-item">
    <div className="project-item__cover">
      <img src={coverImage} alt="project cover" className="project-item__cover-image" />
      <Badge className="project-item__category">{category}</Badge>
      <Badge className="project-item__status" color="secondary">{getStatus(dateStart, dateEnd)}</Badge>
      <div className="project-item__shadow" />
      <p className="project-item__customer">{customer}</p>
    </div>

    <div className="project-info">
      <h6 className="project-info__title">{title}</h6>
      <p className="project-info__date-segment">
        <FontAwesomeIcon icon={faCalendar} />
        {getDateSegment(dateStart, dateEnd)}
      </p>
      <p className="project-info__lead">
        <FontAwesomeIcon icon={faUser} />
        {lead}
      </p>
      <p className="project-info__administrator">
        <FontAwesomeIcon icon={faRubleSign} />
        {administrator}
      </p>
    </div>
  </Panel>
);

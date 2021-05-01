import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
type MatchProps = {
	id: string;
};
export type ShopDetailPageProps = RouteComponentProps<MatchProps> & {};
function ShopDetailPage({ match }: ShopDetailPageProps) {
	return <div>ShopDetailPage {match.params.id}</div>;
}

export default ShopDetailPage;

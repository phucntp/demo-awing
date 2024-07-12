export interface TCampaign {
  information: TInfoCampaign;
  subCampaigns?: TSubCampaign[];
}

export interface TInfoCampaign {
  name: string;
  describe?: string;
}

export interface TSubCampaign {
  name: string;
  status: boolean;
  ads?: TAds[];
}

export interface TAds {
  name: string;
  quantity: number;
}

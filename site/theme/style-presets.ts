export const stylePresets = {
  buttonLightDarkToggle: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
  },
  linkSectionNavigation: {
    base: {
      color: '{{colors.interactivePrimary030}}',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
    },
  },
  tableHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface060}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
      color: '{{colors.inkContrast}}',
    },
  },

  tableRow: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface050}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
      color: '{{colors.inkBase}}',
    },
  },
  closeIcon: {
    base: {
      iconColor: '{{colors.interactiveSecondary040}}',
    },
  },
  arrowIcon: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  swatchBadge: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      color: '{{colors.inkSubtle}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      iconColor: '{{colors.red070}}',
    },
  },
  linkNoUnderline: {
    base: {
      textDecoration: 'none',
    },
    hover: {
      textDecoration: 'none',
    },
  },
  sidebarNavItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
  },
  sidebarHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
  },
  contentsNavItem: {
    base: {
      color: '{{colors.inkSubtle}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface030}}',
      borderWidth: '{{borders.borderWidth020}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.inkBase}}',
    },
    active: {
      color: '{{colors.inkBase}}',
    },
    selected: {
      color: '{{colors.inkContrast}}',
      borderColor: '{{colors.interactivePrimary030}}',
    },
  },
  usageIconPositive: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfacePositive010}}',
      backgroundColor: '{{colors.interfacePositive020}}',
      iconColor: '{{colors.inkPositive}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  usageIconNegative: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNegative010}}',
      backgroundColor: '{{colors.interfaceNegative020}}',
      iconColor: '{{colors.inkNegative}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  contactUs: {
    base: {
      backgroundColor: '{{colors.interfaceBrand010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  infoNotice: {
    base: {
      backgroundColor: '{{colors.interfaceInformative020}}',
      iconColor: '{{colors.inkInformative}}',
      color: '{{colors.inkInformative}}',
      borderColor: '{{colors.interfaceInformative010}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidPositive: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfacePositive010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNegative: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceNegative010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNotice: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceNotice010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidInformative: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceInformative010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNeutral: {
    base: {
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
      backgroundColor: '{{colors.interface040}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagBrand: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceBrand010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },

  // Override these here for now - will move to NewsKit Light in another ticket
  cardContainer: {
    base: {
      borderRadius: (false as unknown) as string,
      color: '{{colors.inkBase}}',
    },
  },
  cardMediaNonInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  cardContainerTeaserAndActions: {
    base: {
      backgroundColor: (false as unknown) as string,
    },
  },
  cardContainerTeaser: {
    base: {
      backgroundColor: (false as unknown) as string,
      borderRadius: (false as unknown) as string,
      color: 'inherit',
    },
  },
  cardContainerActions: {
    base: {
      backgroundColor: (false as unknown) as string,
      borderRadius: (false as unknown) as string,
    },
  },

  //
  // Website Cards
  //
  cardContainerFoundationsOverview: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderColor: '{{colors.neutral020}}',
      borderStyle: 'solid',
    },
  },

  cardContainerNonInteractive030: {
    base: {
      backgroundColor: '{{colors.blue080}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },

  cardContainerNonInteractive020: {
    base: {
      backgroundColor: '{{colors.blue070}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },

  cardContainerNonInteractive010: {
    base: {
      backgroundColor: '{{colors.blue060}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },
  cardMediaInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded040}}',
    },
  },

  imageDefault: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
};
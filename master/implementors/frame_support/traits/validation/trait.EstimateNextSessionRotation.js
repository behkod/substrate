(function() {var implementors = {};
implementors["frame_support"] = [];
implementors["pallet_babe"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/validation/trait.EstimateNextSessionRotation.html\" title=\"trait frame_support::traits::validation::EstimateNextSessionRotation\">EstimateNextSessionRotation</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt; for <a class=\"struct\" href=\"pallet_babe/pallet/struct.Pallet.html\" title=\"struct pallet_babe::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::pallet::Pallet"]}];
implementors["pallet_session"] = [{"text":"impl&lt;BlockNumber:&nbsp;<a class=\"trait\" href=\"sp_arithmetic/traits/trait.AtLeast32BitUnsigned.html\" title=\"trait sp_arithmetic::traits::AtLeast32BitUnsigned\">AtLeast32BitUnsigned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Period:&nbsp;<a class=\"trait\" href=\"sp_core/trait.Get.html\" title=\"trait sp_core::Get\">Get</a>&lt;BlockNumber&gt;, Offset:&nbsp;<a class=\"trait\" href=\"sp_core/trait.Get.html\" title=\"trait sp_core::Get\">Get</a>&lt;BlockNumber&gt;&gt; EstimateNextSessionRotation&lt;BlockNumber&gt; for <a class=\"struct\" href=\"pallet_session/struct.PeriodicSessions.html\" title=\"struct pallet_session::PeriodicSessions\">PeriodicSessions</a>&lt;Period, Offset&gt;","synthetic":false,"types":["pallet_session::PeriodicSessions"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()